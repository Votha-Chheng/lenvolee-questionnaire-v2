import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { RadioButton, TextInput } from 'react-native-paper'
import { getGenre, getNom, getPrenom } from '../../../store/adultState/identityAdult'
import { getEnceinte, getPilule } from '../../../store/adultState/medicalInfo'
import { globalStyles } from '../../../utils/globalStyles'
import Label from '../../../sharedUI/form/Label'
import { onValidateLengthInput } from '../../../utils/validateLengthInput'

const GenreComponentForPhone: FC = () => {
  const {genre, nom, prenom} = useSelector((state: RootState)=> state.identityAdult)

  const dispatch = useDispatch()

  return (
    <View style={{width: "100%", marginTop:20}}>
      <Text style={globalStyles.label}>&#8227; Vous êtes :</Text>
      <View style={[globalStyles.flexRow, {alignItems:"center", marginBottom:0}]}>
        <RadioButton
          value="Madame"
          status={ genre === 'Madame' ? 'checked' : 'unchecked' }
          onPress={() => {
            dispatch(getGenre("Madame"))
            dispatch(getEnceinte(undefined))
            dispatch(getPilule(undefined))
          }}
          />
        <Text 
          style={genre === 'Monsieur' ? 
          {fontSize: 17.5, color:"grey"} 
          : 
          {fontSize: 17.5, color:"green", fontWeight:"bold"}}
        >
          Madame
        </Text>
      </View>
      <View style={[globalStyles.flexRow, {alignItems:"center", marginTop:0}]}>
        <RadioButton
          value="Monsieur"
          status={ genre === 'Monsieur' ? 'checked' : 'unchecked' }
          onPress={() =>{ 
            dispatch(getGenre("Monsieur"))
            dispatch(getEnceinte(false))
            dispatch(getPilule(false))
          }}
          />
        <Text 
          style={genre === 'Madame' ? 
          {fontSize: 15, color:"grey" } 
          : 
          {fontSize: 20, color:"green", fontWeight:"bold"}}
        >
          Monsieur
        </Text>
      </View>
      <View style={globalStyles.flexRow}>
        <Label
          question="Nom"
          statement={nom}
        />
        <TextInput
          style={[globalStyles.input, styles.nameInput, {borderColor:`${nom === undefined ? "red":"green"}`}]} 
          placeholder="Nom"
          onChangeText={(text)=> onValidateLengthInput(1, dispatch, getNom, text.trim())}
        />
      </View>
      <View style={globalStyles.flexRow}>
        <Label
          question="Prénom"
          statement={prenom}
        />
        <TextInput
          style={[globalStyles.input, {width: 250, borderColor:`${prenom === undefined ? "red":"green"}`}]} 
          placeholder="Prénom"
          onChangeText={(text)=> onValidateLengthInput(1, dispatch, getPrenom, text.trim())}
        />
      </View>
    </View>
  )
}

export default GenreComponentForPhone

const styles = StyleSheet.create({
  nameInput: {
    borderWidth:2, 
    width:250, 
    marginLeft:25, 
    maxHeight:45
  },
})