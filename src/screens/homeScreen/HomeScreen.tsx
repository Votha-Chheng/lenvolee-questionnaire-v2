import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App'
import { useNavigation } from '@react-navigation/native'
import { resetIdentity } from '../../store/adultState/identity'
import { resetConsultationInfo } from '../../store/adultState/consultationInfo'
import { resetDentsInfo } from '../../store/adultState/dentsInfo'
import { resetDiversInfo } from '../../store/adultState/diversInfo'
import { resetEsthetique } from '../../store/adultState/esthetiqueInfo'
import { resetGencives } from '../../store/adultState/gencives'
import { resetHabitudesInfo } from '../../store/adultState/habitudesInfo'
import { resetHygieneDentaire } from '../../store/adultState/hygieneDentaireInfo'
import { resetMachoire } from '../../store/adultState/machoire'
import { resetMedicalHistory } from '../../store/adultState/medicalInfo'
import { resetConsultationChild } from '../../store/childState/consultationChild'
import { resetEtatBuccoDentaire } from '../../store/childState/etatBuccoDentaire'
import { resetEtatDeSanteChild } from '../../store/childState/etatSanteChild'
import { resetIdentityAccompagnant } from '../../store/childState/identityAccompagnant'
import { resetIdentityChild } from '../../store/childState/identityChild'
import { globalStyles } from '../../utils/globalStyles'
import { RootState } from '../../store/store'
import { resetListFichePatient } from '../../store/listePatients/listefichesPatients'

export type HomeScreenProps = StackNavigationProp<RootStackParamList, "Home">

const HomeScreen:FC = () => {
  const [locked, setLocked] = useState<boolean>(true)
  const [motDePasseInput, setMotdePasseInput] = useState<string>("")

  const { listeFichesPatient } = useSelector((state: RootState)=> state.listeFichesPatient)

  const navigation = useNavigation<HomeScreenProps>()

  const dispatch = useDispatch()

  const resetAdultStateForm = ()=> {
    dispatch(resetIdentity())
    dispatch(resetConsultationInfo())
    dispatch(resetDentsInfo())
    dispatch(resetDiversInfo())
    dispatch(resetEsthetique())
    dispatch(resetGencives())
    dispatch(resetHabitudesInfo())
    dispatch(resetHygieneDentaire())
    dispatch(resetMachoire())
    dispatch(resetMedicalHistory())
  }

  const resetChildStateForm = ()=> {
    dispatch(resetConsultationChild())
    dispatch(resetEtatBuccoDentaire())
    dispatch(resetEtatDeSanteChild())
    dispatch(resetIdentityAccompagnant())
    dispatch(resetIdentityChild())
  }


  useEffect(()=>{
    if(motDePasseInput==="123456789"){
      setLocked(false)
    }
  }, [motDePasseInput])
  
  
  useEffect(()=>{
    navigation.addListener("blur", ()=>{
      setLocked(true)
    })
  }, [navigation])

  useEffect(()=> {
    if(listeFichesPatient.length>0){
      console.log(listeFichesPatient)
    }
  }, [listeFichesPatient])
  
  const handleGetAccess = (input:string): void=>{
    if(input==='123456789'){
      setLocked(false)
    }
  }
  
  const pressNouveauPatientAdulte = ()=>{
    resetAdultStateForm()
    navigation.navigate("AdultForm")
  }
  const pressNouveauPatientEnfant = ()=>{
    resetChildStateForm()
    navigation.navigate("ChildForm")
  }

  const pressToListePatients = ()=>{
    navigation.navigate("Liste des fiches de Patient")
  }

  const createTwoButtonAlert = () => {
    Alert.alert(
      "Suppression de la liste des fiches patients",
      "Êtes-vous sûr de vouloir supprimer ?",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        { 
          text: "Supprimer la liste", 
          onPress: ()=>{dispatch(resetListFichePatient())}
        }
      ]
    );
  }
    
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
      {
        locked ?
        <View style={{alignItems:"center"}}>
          <Text style={[globalStyles.label, {color:"black"}]} >
            Tapez le mot de passe :
          </Text>
          <TextInput
            style={[globalStyles.input, {width:650}]}
            onChangeText={(text)=>setMotdePasseInput(text)}
            secureTextEntry={true}
          />
          <Button
            style={{backgroundColor:"red", width:600, height:50, marginVertical:20}}
            labelStyle={{fontSize:20, flex:1, color:"#fff", justifyContent:"center", paddingHorizontal:0}}
            onPress={()=>handleGetAccess(motDePasseInput)}
          >
            Valider mot de passe
          </Button>
        </View>
        :
        <View>
          <Text style={[styles.text, {marginBottom:50, textAlign:'center'}]}>Accueil</Text>
          <Button
            mode="contained"
            buttonColor='green'
            onPress={pressNouveauPatientAdulte}
            style={[globalStyles.homeButtonStyle, {marginBottom:50}]}
            labelStyle={{fontSize:20, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Questionnaire Nouveau patient
          </Button>
          <Button
            mode="contained"
            onPress={pressNouveauPatientEnfant}
            buttonColor='#1C9CEB'
            style={[globalStyles.homeButtonStyle, {marginBottom:50}]}
            labelStyle={{fontSize:20, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Questionnaire Enfant
          </Button>
          <View>
            <Button
              mode='contained'
              dark={true}
              buttonColor='orange'
              onPress={pressToListePatients}
              style={[globalStyles.homeButtonStyle, {marginBottom:50}]}
              labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0}}
            >
              Exporter les fiches patients
            </Button>
          </View>
          <View>
            <Button
              mode='contained'
              dark={true}
              onPress={createTwoButtonAlert}
              buttonColor='red'
              style={[globalStyles.homeButtonStyle, {marginBottom:50}]}
              labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0}}
            >
              Supprimer les précédentes listes de patients
            </Button>
          </View>
          <View>
            <Button
              mode='contained'
              dark={true}
              onPress={()=>setLocked(true)}
              style={globalStyles.homeButtonStyle}
              labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0}}
            >
              Verrouiller l'écran d'Accueil
            </Button>
          </View>
        </View>
      }  
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text:{
    color:"black",
    fontSize:50,
    fontFamily:"FrankRuhlLibre-ExtraBold"
  }
})
