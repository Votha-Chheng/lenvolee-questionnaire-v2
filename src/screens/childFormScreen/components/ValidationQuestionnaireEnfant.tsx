import { View, Text, Pressable } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenProps } from '../../homeScreen/HomeScreen'
import { globalStyles } from '../../../utils/globalStyles'
import { saveIncompleteForm } from '../../../utils/alertButtons'
import { FicheReponses } from '../../../classes/FicheReponses'
import { handleFicheReponseInListePatients } from '../../../utils/handleFicheReponseInListePatients'
import { setListeFichePatient } from '../../../store/listePatients/listefichesPatients'

const ValidationQuestionnaireEnfant: FC = () => {
  const {identityAccompagnant, identityChild, etatDeSanteChild, etatBuccoDentaireChild, consultationChild} = useSelector((state: RootState) => state)
  const { listeFichesPatient } = useSelector((state: RootState) => state.listeFichesPatient)

  const [questionsRestantes, setQuestionsRestantes] = useState<number>(0)

  const dispatch = useDispatch()

  const navigation = useNavigation<HomeScreenProps>()

  const countUndefinedState = (objectToScan: any): number=>{
    let nbStateWithUndefined = 0

    for (let value in objectToScan){
      if(typeof(objectToScan[value])==='object'){
        for(let subValue in objectToScan[value]){
          if((objectToScan[value][subValue]) === undefined){
            nbStateWithUndefined++
          }
        }
      } else {
        if(objectToScan[value] === undefined){
          nbStateWithUndefined++
        }
      }
    }
    return nbStateWithUndefined
  }

  useEffect(()=>{
    const totalUndefined: number = 
      countUndefinedState(identityAccompagnant) +
      countUndefinedState(identityChild) +
      countUndefinedState(etatDeSanteChild) +
      countUndefinedState(etatBuccoDentaireChild) +
      countUndefinedState(consultationChild)

    setQuestionsRestantes(totalUndefined)

  }, [identityAccompagnant, identityChild, etatDeSanteChild, etatBuccoDentaireChild, consultationChild])

  const insertFichePatientInChildPatientsList = ()=> {
    const reponsesObject: FicheReponses = {isAdult: false, id: +Date.now(), ...identityAccompagnant, ...identityChild, ...etatDeSanteChild, ...etatBuccoDentaireChild, ...consultationChild }

    handleFicheReponseInListePatients(true, listeFichesPatient, navigation, reponsesObject, dispatch, setListeFichePatient)
  }

  return (
    <View style={[globalStyles.container, {alignItems:"center", marginVertical:30}]}>
      {
        questionsRestantes>0 ?
        <View style={[globalStyles.flexRow, {flexWrap:"wrap", justifyContent:"center"}]}>
          <Text style={[globalStyles.label, {marginBottom:-10}]}>
            Il reste encore
          </Text>
          <Text style={[globalStyles.label, {color:"red", marginBottom:-10}]}>
            {questionsRestantes.toString()} questions en rouge.
          </Text>
          <Text style={[globalStyles.label, {textAlign:"center"}]}>
            Veuillez s'il vous plaît remonter à ces questions pour y répondre.
          </Text>
        </View>
        :
        <View style={[globalStyles.flexRow, {flexWrap:"wrap", justifyContent:"center"}]}>
          <Text style={[globalStyles.label, {marginBottom:-10}]}>
            Vous pouvez maintenant valider le questionnaire.
          </Text>
        </View>
      }
      <Pressable
        style={{width: "90%"}}
        onLongPress={()=> saveIncompleteForm(
          "Il semble y avoir des réponses manquantes dans le questionnaire...", 
          "Voulez-vous quand même valider les réponses du questionnaire ?", 
          "Valider quand même", 
          insertFichePatientInChildPatientsList
        )} 
        delayLongPress={8000}
      >
        <Button 
          style={globalStyles.validationButton} 
          labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0, color:"#fff"}}
          onPress={()=>insertFichePatientInChildPatientsList()} 
          mode="contained" 
          disabled={questionsRestantes>0 ? true : false}
        >
          {questionsRestantes>0 ? "Finissez le questionnaire pour valider" : "Appuyer ici pour valider le questionnaire"}
        </Button>
      </Pressable>
    </View>
  )
}

export default ValidationQuestionnaireEnfant