import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useRef } from 'react'
import { RadioButton, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { getGenre, getNom, getPrenom } from '../../../store/adultState/identity'
import { getEnceinte, getPilule } from '../../../store/adultState/medicalInfo'
import { globalStyles } from '../../../utils/globalStyles'
import { RootState } from '../../../store/store'
import { onValidateLengthInput } from '../../../utils/validateLengthInput'

const GenreComponentForTablet:FC = () => {
  const {genre, nom, prenom} = useSelector((state: RootState)=> state.identity)

  const dispatch = useDispatch()

  const translation = useRef(new Animated.Value(0)).current

  const switchToBottom = ()=>{
    Animated.timing(translation, {
      toValue: -33,
      duration: 250,
      useNativeDriver: true
    }).start()
  }
  const switchToTop = ()=>{
    Animated.timing(translation, {
      toValue: 3,
      duration: 250,
      useNativeDriver: true
    }).start()
  }

  useEffect(() => {
    genre === "Monsieur" ? switchToBottom() : switchToTop()
  }, [genre])

  return (
    <View style={{flexDirection:"row", marginTop : 15}}>
    <Text style={{fontSize:20, marginTop:7}} >&#8227;</Text>
    <Animated.View style={{marginVertical : 5, marginRight:10, width:125, transform : [{translateY : translation}]}}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
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
          {fontSize: 15, color:"grey"} 
          : 
          {fontSize: 20, color:"green", fontWeight:"bold"}}
        >
          Madame
        </Text>
      </View>
      <View style={globalStyles.flexRow}>
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
    </Animated.View>
    <TextInput
      style={[globalStyles.input, styles.nameInput, {borderColor:`${nom === undefined ? "red":"green"}`}]} 
      placeholder="Nom de famille"
      onChangeText={(text)=> onValidateLengthInput(1, dispatch, getNom, text.trim())}
    />
    <TextInput 
      style={[globalStyles.input, styles.nameInput, {borderColor:`${prenom === undefined ? "red":"green"}`}]} 
      placeholder="Prénom"
      onChangeText={(text)=> onValidateLengthInput(1, dispatch, getPrenom, text.trim())}
    />
  </View> 
  )
}

export default GenreComponentForTablet

const styles = StyleSheet.create({
  nameInput: {
    borderWidth:2, 
    width:250, 
    marginLeft:25, 
    maxHeight:45
  },
})