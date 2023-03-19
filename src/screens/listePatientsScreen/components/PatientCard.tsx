import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { FC } from 'react'
import { globalStyles } from '../../../utils/globalStyles'
import { FicheReponses } from '../../../classes/FicheReponses'
import { displayDateNormal } from '../../../utils/displayDateDMA'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { deleteSingleFichePatientById } from '../../../store/listePatients/listefichesPatients'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenProps } from '../../homeScreen/HomeScreen'

type PatientCardProps = {
  index: number
  fiche: FicheReponses
  loading: boolean
  loadingExport: boolean
  exportPDF: Function
}
const PatientCard: FC<PatientCardProps> = ({ index, fiche, loading, loadingExport, exportPDF}) => {

  const dispatch = useDispatch()
  const navigation = useNavigation<HomeScreenProps>()

  const deletePatientFicheFromDB = (id: number): void=> {
    dispatch(deleteSingleFichePatientById(id))
  }

  const createTwoButtonAlert = (id: number) => {
    Alert.alert(
      "Êtes-vous sûr de vouloir supprimer cette fiche ?",
      "Pensez à exporter cette fiche avant de la supprimer.",
      [
        {
          text: "Annuler",
          style: "cancel"
        },
        { 
          text: "Supprimer définitivement",
          style: "destructive", 
          onPress: ()=> deletePatientFicheFromDB(id)
        },
      ],
      {
        cancelable: true
      }
    );
  }

  return (
    <View style={{marginVertical:20, width:"100%"}}>
      <View style={[styles.bandeau,{backgroundColor:`${index%2 === 0 ? "#4b8095" : "#dbe9ee"}`, alignItems:"center"}]}>
        <Text style={[styles.nom, { color:`${index%2===0 ? "#fff":"#4b8095"}`}]}>
          {fiche.nom ? fiche.nom.toString().toUpperCase() : "Nom indéfini"} {fiche.prenom ? fiche.prenom?.toString() : 'Prénom indefini'}
        </Text>
        <Text style={{marginHorizontal:5, color:`${index%2===0 ? "#fff":"#4b8095"}`, fontSize:20}}>
          venu le {fiche.dateRdv ? displayDateNormal(new Date(fiche.dateRdv).toDateString()) : "indéfini"}
        </Text>
      </View>
      <View style={[globalStyles.flexRow, {marginTop:5, justifyContent:'center'}]}>
        <Button
          mode='contained'
          buttonColor='red'
          style={ styles.button }
          disabled={loading}
          onPress={()=> createTwoButtonAlert(fiche.id)}
        >
          Supprimer fiche
        </Button>
        <Button
          mode='contained'
          buttonColor='blue'
          style={ styles.button }
          onPress={()=> exportPDF(fiche.id, fiche.isAdult, fiche.nom ?? "Nom", fiche.prenom?? 'Prenom')}
          disabled={loading}
          loading={loadingExport}
        >
          Exporter PDF
        </Button>
        <Button
          mode='contained'
          buttonColor='purple'
          style={styles.button}
          onPress={()=> navigation.navigate("Visualiser fiche patient", {id: fiche.id} )}
          disabled={loading}
        >
          Voir
        </Button>
      </View>
    </View>
  )
}

export default PatientCard

const styles = StyleSheet.create({
  bandeau : {
    paddingVertical:5,
    paddingHorizontal:7.5,
    borderRadius:3,
    marginRight:5,
    justifyContent:'center'
  },
  nom : {
    fontSize:22.5, 
    fontWeight:"bold",
    marginRight:5
  },
  button: {
    marginRight:5, 
    borderRadius:7.5
  }
})