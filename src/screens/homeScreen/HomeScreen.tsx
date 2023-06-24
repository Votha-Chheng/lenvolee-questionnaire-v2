import { Alert, Linking, StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../App'
import { Link, useNavigation } from '@react-navigation/native'
import { globalStyles } from '../../utils/globalStyles'
import { RootState } from '../../store/store'
import { resetListFichePatient } from '../../store/listePatients/listefichesPatients'
import LockScreen from './components/LockScreen'
import ChoosePassword from './components/ChoosePassword'
import { resetAdultGlobalState, resetChildGlobalState } from '../../utils/resetGlobalState'

export type HomeScreenProps = StackNavigationProp<RootStackParamList, "Home">

const HomeScreen:FC = () => {
  const [toNewPassword, setToNewPassword] = useState<boolean>(false)
  const [locked, setLocked] = useState<boolean>(true)
  const [motDePasseInput, setMotdePasseInput] = useState<string>("")

  const { password } = useSelector((state: RootState)=> state.password)
  const navigation = useNavigation<HomeScreenProps>()

  const dispatch = useDispatch()

  useEffect(()=>{
    if(password === undefined){
      setToNewPassword(true)
    }
  }, [password])
  
  
  useEffect(()=>{
    navigation.addListener("blur", ()=>{
      setLocked(true)
    })
  }, [navigation])

  const handleGetAccess = (input:string): void=>{
    if(input===password){
      setLocked(false)
    }
  }
  
  const pressNouveauPatientAdulte = ()=>{
    resetAdultGlobalState(dispatch)
    navigation.navigate("AdultForm")
  }
  const pressNouveauPatientEnfant = ()=>{
    resetChildGlobalState(dispatch)
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
    <View style={{flex:1, justifyContent:'center', alignItems:"center", width:"100%"}}>
      {
        toNewPassword ?
        <ChoosePassword setToNewPassword={setToNewPassword} />
        :
        locked ?
        <LockScreen setMotDePasseInput={setMotdePasseInput} motDePasseInput={motDePasseInput} handleGetAccess={handleGetAccess} setToNewPassword={setToNewPassword} />
        :
        <View style={[globalStyles.homeInputContainer, {alignItems:"center"}]}>
          <Text style={[styles.text, {marginBottom:50, textAlign:'center'}]}>Accueil</Text>
          <Button
            mode="contained"
            buttonColor='green'
            onPress={pressNouveauPatientAdulte}
            style={[globalStyles.homeButtonStyle]}
            labelStyle={{fontSize:20, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Questionnaire Nouveau patient
          </Button>
          <Button
            mode="contained"
            onPress={pressNouveauPatientEnfant}
            buttonColor='#1C9CEB'
            style={[globalStyles.homeButtonStyle]}
            labelStyle={{fontSize:20, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Questionnaire Enfant
          </Button>
          <Button
            mode='contained'
            dark={true}
            buttonColor='orange'
            onPress={pressToListePatients}
            style={[globalStyles.homeButtonStyle]}
            labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Exporter les fiches patients
          </Button>
          <Button
            mode='contained'
            dark={true}
            onPress={createTwoButtonAlert}
            buttonColor='red'
            style={[globalStyles.homeButtonStyle]}
            labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Supprimer les précédentes listes de patients
          </Button>
          <Button
            buttonColor='#3c3744'
            mode='contained'
            dark={true}
            onPress={()=>{
              setToNewPassword(true)
              setLocked(true)
            }}
            style={globalStyles.homeButtonStyle}
            labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Changer le mot de passe
          </Button>
          <Button
            mode='contained'
            dark={true}
            onPress={()=>setLocked(true)}
            style={globalStyles.homeButtonStyle}
            labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Verrouiller l'écran d'Accueil
          </Button>
          <Button
            buttonColor='#297373'
            mode='contained'
            dark={true}
            onPress={()=>Linking.openURL("https://doc-hosting.flycricket.io/l-envolee-questionnaire-terms-of-use/40b613a9-f924-4cd0-948c-ceaeb19c3046/terms")}
            style={globalStyles.homeButtonStyle}
            labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0}}
          >
            Conditions générales d'utilisation
          </Button>
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
