import { Pressable, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { HomeScreenProps } from '../../homeScreen/HomeScreen';
import { globalStyles } from '../../../utils/globalStyles';
import { setListeFichePatient } from '../../../store/listePatients/listefichesPatients';
import { handleFicheReponseInListePatients } from '../../../utils/handleFicheReponseInListePatients';
import { FicheReponses } from '../../../classes/FicheReponses';
import { displayAlertWithTwoButtons } from '../../../utils/alertButtons';

const ValidationQuestionnaire: FC = () => {
  const {identity, consultationInfo, dentsInfo, diversInfo, esthetiqueInfo, gencivesInfo, habitudesInfo, hygienDentaireInfo, machoireInfo, medicalInfos} = useSelector((state: RootState) => state)
  const { listeFichesPatient } = useSelector((state: RootState)=> state.listeFichesPatient)

  const [questionsRestantes, setQuestionsRestantes] = useState(0)

  const dispatch = useDispatch()
  const navigation = useNavigation<HomeScreenProps>()

  const countUndefinedState = (objectToScan: any): number=>{
    let arrayStatesWithUndefined = 0

    for (let value in objectToScan){
      if(objectToScan[value] === undefined){
        arrayStatesWithUndefined++
      }
    }

    return arrayStatesWithUndefined
  }

  const totalUndefinedState = (arrayState: any[]) : number => {
    let totalCount : number = 0

    totalCount = arrayState.reduce((a: number, b: number) => a+b)

    return totalCount
  }

  useEffect(()=>{
    const totalUndefined = totalUndefinedState(
      [
        countUndefinedState(identity), 
        countUndefinedState(medicalInfos), 
        countUndefinedState(dentsInfo), 
        countUndefinedState(consultationInfo), 
        countUndefinedState(gencivesInfo),
        countUndefinedState(machoireInfo), 
        countUndefinedState(hygienDentaireInfo), 
        countUndefinedState(habitudesInfo), 
        countUndefinedState(esthetiqueInfo), 
        countUndefinedState(diversInfo)
      ]
    )

    setQuestionsRestantes(totalUndefined)
    
  }, [identity, medicalInfos, dentsInfo, consultationInfo, gencivesInfo, machoireInfo, hygienDentaireInfo, habitudesInfo, esthetiqueInfo, diversInfo])

  const insertFichePatientInAdultPatientsList = ()=> {
    const reponsesObject: FicheReponses = {
      isAdult: true, 
      id: +Date.now(), 
      ...identity, 
      ...medicalInfos, 
      ...dentsInfo, 
      ...consultationInfo, 
      ...gencivesInfo, 
      ...machoireInfo, 
      ...hygienDentaireInfo, 
      ...habitudesInfo, 
      ...esthetiqueInfo, 
      ...diversInfo
    }

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
        style={{width:"90%"}}
        onLongPress={()=> displayAlertWithTwoButtons(
          "Il semble y avoir des réponses manquantes dans le questionnaire...", 
          "Voulez-vous quand même valider les réponses du questionnaire ?", 
          "Valider quand même", 
          insertFichePatientInAdultPatientsList
        )} 
        delayLongPress={8000}
      >
        <Button 
          buttonColor='green'
          style={globalStyles.validationButton} 
          labelStyle={{fontSize:17, flex:1, justifyContent:"center", paddingHorizontal:0, color:"#fff"}}
          onPress={()=>insertFichePatientInAdultPatientsList()} 
          mode="contained" 
          disabled={questionsRestantes>0 ? true : false}

        >
          {questionsRestantes>0 ? "Finissez le questionnaire pour valider" : "Appuyer ici pour valider le questionnaire"}
        </Button>
      </Pressable>
    </View>
  );
};

export default ValidationQuestionnaire;

