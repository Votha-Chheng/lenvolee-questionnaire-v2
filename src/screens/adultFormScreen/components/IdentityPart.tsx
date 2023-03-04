import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Picker } from '@react-native-picker/picker';
import { getAdresse, getCodePostal, getDateDeNaissance, getDateRdv, getDr, getEmail, getEmailOuiNon, getProfession, getTel, getVille } from '../../../store/adultState/identity';
import { onValidateLengthInput } from '../../../utils/validateLengthInput';
import { globalStyles } from '../../../utils/globalStyles';
import BirthComponent from '../../../sharedUI/form/BirthComponent';
import Label from '../../../sharedUI/form/Label';
import LabelInputForNumber from '../../../sharedUI/form/LabelInputForNumber';
import RadioComponent from '../../../sharedUI/form/RadioComponent';
import LabelInputForText from '../../../sharedUI/form/LabelInputFortText';
import GenreComponentForTablet from './GenreComponentForTablet';
import { TextInput } from 'react-native-paper';
import GenreComponentForPhone from './GenreComponentForPhone';

const IdentityPart: FC = () => {
  const {dr, dateRdv, dateDeNaissance, tel, email, emailOuiNon, profession, adresse, codePostal, ville} = useSelector((state: RootState)=> state.identity)

  const dispatch = useDispatch()

  const { height, width } = useWindowDimensions()

  const onValidateNumber = (text: string): void=>{
    if(text.startsWith("0") && text.length === 10){
      dispatch(getTel(text.trim()))
    } else {
      dispatch(getTel(undefined))
    }
  }

  const onValidateEmail = (text: string): void=>{
    if(text.includes("@") && text.includes(".")){
      dispatch(getEmail(text.trim()))
    } else {
      dispatch(getEmail(undefined))
    }
  }

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <View style={globalStyles.flexRow}>
        <Text style={globalStyles.label}>
          &#8227; Vous avez rendez-vous avec :
         </Text>
         <View style={[styles.picker]}>
          <Picker
            selectedValue = {dr}
            onValueChange = {(itemValue, itemIndex)=> dispatch(getDr(itemValue)) }
            mode="dropdown"
            style={{transform:[{scaleX: 1.05}, {scaleY:1.1}, {translateX:5}]}}
          >
            <Picker.Item label="Dr. Sylvie MA-FRANCIN" value="Sylvie MA-FRANCIN"/>
          </Picker>
        </View>
      </View>

      <View style={[globalStyles.flexRow, {height: 70, alignItems:"center"}]}>
        <Text style={globalStyles.label}>
          &#8227; Date du rendez-vous :
        </Text>
        <BirthComponent statement={dateRdv} reducerFromStore={getDateRdv} />
      </View>

      {
        width>500 
        ? <GenreComponentForTablet/>
        : <GenreComponentForPhone/>
      }


      <View style={[globalStyles.flexRow, {alignItems:"center"}]}>
        <Label
          question="Date de naissance "
          statement={dateDeNaissance}
        />
        <BirthComponent statement={dateDeNaissance} reducerFromStore={getDateDeNaissance} />
      </View>


      <View style={globalStyles.flexRow}>
        <LabelInputForNumber
          question="Téléphone "
          statement={tel}
          maxLength={10}
          onHandleChangeNumber={(text: string)=>onValidateNumber(text.trim())}
        />
      </View>


      <View style={[globalStyles.flexRow, {alignItems:"flex-start", marginBottom:0}]}>
        <Label
          statement={emailOuiNon}
          question="Avez-vous une adresse e-mail ? "
        />
        <RadioComponent
          valueState={emailOuiNon} 
          setValueToTrue={()=>{
            dispatch(getEmailOuiNon(true))
            dispatch(getEmail(undefined))
          }}
          setValueToFalse={()=>{
            dispatch(getEmailOuiNon(false))
            dispatch(getEmail(""))
          }}
        />
      </View>
      {
        emailOuiNon === true &&
        <View style={globalStyles.flexRow}>
          <Label
            question="E-mail "
            statement={email}
          />
          <TextInput
            keyboardType="email-address" 
            autoCapitalize='none'
            style={[globalStyles.input, {borderColor:`${email===undefined? "grey":"green"}`, width:300}]}
            onChangeText={(text)=>onValidateEmail(text.trim())}
          />
        </View>
      }

      <View style={{marginBottom:20}}>
        <LabelInputForText
          question='Profession'
          statement={profession}
          reducerFromStore={getProfession}
          flexRow={true}
          minLengthForInput={0}
        />
      </View>

      <View style={{marginBottom:20}}>
        <LabelInputForText
          question='Adresse'
          statement={adresse}
          reducerFromStore={getAdresse}
          flexRow={true}
          minLengthForInput={3}
          width={500}
        />
      </View>

      <View style={globalStyles.flexRow}>
        <Label
          question="Ville "
          statement={ville}
        />
        <TextInput 
          style={[globalStyles.input, {borderColor:`${ville===undefined? "grey":"green"}`, width:300}]}
          onChangeText={(text)=>onValidateLengthInput(0, dispatch, getVille, text.trim())}
        />
      </View>
      
      <View style={globalStyles.flexRow}>
        <Label
          question="Code postal "
          statement={codePostal}
        />
        <TextInput 
          keyboardType ="numeric"
          maxLength={5}
          style={[globalStyles.input, {borderColor:`${codePostal===undefined? "grey":"green"}`, width:100}]}
          onChangeText={(text)=>onValidateLengthInput(4, dispatch, getCodePostal, text.trim())}
        />
      </View>
    </SafeAreaView>  

  );
}


const styles = StyleSheet.create({
  picker : {
    width:300,
    marginRight:20,
    alignSelf:"flex-end",
    borderColor : "#000",
    borderWidth : 1.5,
    fontSize:17.5,
  }
})

export default IdentityPart
