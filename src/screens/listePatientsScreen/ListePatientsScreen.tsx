import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { FC, useState } from 'react'
import { Button } from 'react-native-paper'
import FileViewer from "react-native-file-viewer";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { getHTMLAdultForm, getHTMLChildForm } from '../../utils/getHtmlForm'
import { displayDateNormal } from '../../utils/displayDateDMA'
import { globalStyles } from '../../utils/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { FicheReponses } from '../../classes/FicheReponses'
import { deleteSingleFichePatientById } from '../../store/listePatients/listefichesPatients';

const ListFichesPatients: FC = () => {

  const { listeFichesPatient } = useSelector((state: RootState)=> state.listeFichesPatient )

  const [loading, setLoading] = useState<boolean>(false)
  const [loadingExport, setLoadingExport] = useState<boolean>(false)

  const dispatch = useDispatch()

  const listSortedByDate = (list: any[])=> {
    const temp = [...list]
    return temp.reverse()
  }

  const exportPDF = async(id: number, isAdult: boolean, nom: string, prenom: string)=> {
    const fichePatient = listeFichesPatient.find((fichePatient: FicheReponses)=> fichePatient.id === id)
    setLoading(true)
    setLoadingExport(true)

    try {
      const result: any = await RNHTMLtoPDF.convert({
        html: isAdult ? getHTMLAdultForm(fichePatient) : getHTMLChildForm(fichePatient),
        fileName: `${nom}-${prenom}-${id}`,
        directory: 'Documents',
      })
      
      if(result){
        const response = await FileViewer.open(result.filePath)
        if(response === undefined){
          setLoadingExport(false)
          setLoading(false)
        }
        
      } 
    } catch (error: any) {
      console.log(error)
      setLoading(false)
      setLoadingExport(false)
      Alert.alert("Erreur", error)
    }
  }

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
    <View style={{maxWidth:"100%"}}>
      <Text style={{fontSize:30, fontWeight:'bold', textAlign:"center", marginVertical:30}}>
        Liste des Fiches Patients
      </Text>
      <View style={{alignItems:'center'}}>
        {
          listeFichesPatient!==null && listeFichesPatient!== undefined && listeFichesPatient.length>0
          ?
          listSortedByDate(listeFichesPatient).map((fiche: FicheReponses, index: number)=>(
            <View 
              key={index.toString()}
              style={[globalStyles.flexRow, {marginBottom:20, maxHeight:120}]}
            >
              <View style={[styles.bandeau,{backgroundColor:`${index%2 === 0 ? "#4b8095" : "#dbe9ee"}`, alignItems:"center"}]}>
                <Text style={[styles.nom, { color:`${index%2===0 ? "#fff":"#4b8095"}`}]}>
                  {fiche.nom ? fiche.nom.toString().toUpperCase() : "Nom indéfini"} {fiche.prenom ? fiche.prenom?.toString() : 'Prénom indefini'}
                </Text>
                <Text style={{marginHorizontal:5, color:`${index%2===0 ? "#fff":"#4b8095"}`, fontSize:20}}>
                  venu le {fiche.dateRdv ? displayDateNormal(new Date(fiche.dateRdv).toDateString()) : "indéfini"}
                </Text>
              </View>
              <View>
                <Button
                  mode='contained'
                  buttonColor='red'
                  style={{ marginBottom:5}}
                  disabled={loading}
                  //loading={loading}
                  onPress={()=> createTwoButtonAlert(fiche.id)}
                >
                  Supprimer la fiche
                </Button>
                <Button
                  mode='contained'
                  style={{marginTop:5}}
                  onPress={()=> exportPDF(fiche.id, fiche.isAdult, fiche.nom ?? "Nom", fiche.prenom?? 'Prenom')}
                  disabled={loading}
                  loading={loadingExport}
                >
                  Exporter le PDF
                </Button>
              </View>
            </View>
          ))
          : 
          <View style={{justifyContent:"center", alignItems:"center", height:"75%", width:"100%"}}>
            <Text style={{fontFamily:"FrankRuhlLibre_400Regular", fontSize:25, color:"black"}}>Aucun patient dans la base de données.</Text> 
          </View>
        }

      </View>
    </View>
  )
}

export default ListFichesPatients

const styles = StyleSheet.create({
  bandeau : {
    paddingVertical:2.5,
    paddingHorizontal:7.5,
    borderRadius:3,
    marginRight:5,
    height:"100%",
    justifyContent:'center'
  },
  nom : {
    fontSize:22.5, 
    fontWeight:"bold",
    marginRight:5
  }
})