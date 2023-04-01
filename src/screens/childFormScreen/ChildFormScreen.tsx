import { Alert } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import IdentityChild from './components/IdentityChild'
import IdentityAccompagnant from './components/IdentityAccompagnant'
import ConsultationEnfant from './components/ConsultationEnfant'
import EtatDeSanteChild from './components/EtatDeSanteChild'
import EtatSanteBoucheChild from './components/EtatSanteBoucheChild'
import ValidationQuestionnaireEnfant from './components/ValidationQuestionnaireEnfant'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenProps } from '../homeScreen/HomeScreen'
import { ActivityIndicator } from 'react-native-paper'
import Intro from '../../sharedUI/layout/Intro'
import Titles from '../../sharedUI/layout/Titles'
import { globalStyles } from '../../utils/globalStyles'
import { resetChildGlobalState } from '../../utils/resetGlobalState'
import { useDispatch } from 'react-redux'

const ChildFormScreen: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  const navigation = useNavigation<HomeScreenProps>()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(navigation.isFocused()){
      setLoading(false)
    }
  }, [navigation.isFocused()])

  useEffect(()=> {
    resetChildGlobalState(dispatch)
  }, [])

  useEffect(()=>{
    navigation.addListener("beforeRemove", (event)=>{

      if(event.data.action.type==="GO_BACK"){
        event.preventDefault()
        createTwoButtonAlert()
      }
    })
  }, [navigation])

  const createTwoButtonAlert = () => {
    Alert.alert(
      "Êtes-vous sûr de vouloir revenir à l'accueil ?",
      "Toutes les données rentrées seront perdues, il faudra recommencer le questionnaire.",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        { 
          text: "Revenir à l'accueil", 
          onPress: ()=>navigation.navigate("Home")
        }
      ],
      {
        cancelable: true
      }
    );
  }

  if(loading){
    return (
      <ActivityIndicator animating={true} style={globalStyles.loader}/>
    )
  }
  return (
    <ScrollView>
      <Intro adultForm={false} />
      <Titles title="Identité de l'enfant" />
      <IdentityChild/>
      <Titles title="Identité des responsables légaux de l'enfant" />
      <IdentityAccompagnant/>
      <Titles title="Renseignements sur la consultation" />
      <ConsultationEnfant/>
      <Titles title="État de santé général de l'enfant" />
      <EtatDeSanteChild/>
      <Titles title="État de santé bucco-dentaire de l'enfant" />
      <EtatSanteBoucheChild/>
      <Titles title="Valider les réponses du questionnaire"/>
      <ValidationQuestionnaireEnfant/>
    </ScrollView>
  )
}

export default ChildFormScreen
