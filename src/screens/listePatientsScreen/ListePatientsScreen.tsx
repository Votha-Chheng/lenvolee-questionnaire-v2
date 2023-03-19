import { StyleSheet, Text, View, Alert, useWindowDimensions, FlatList } from 'react-native'
import React, { FC, useState } from 'react'
import FileViewer from "react-native-file-viewer";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { getHTMLAdultForm, getHTMLChildForm } from '../../utils/getHtmlForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { FicheReponses } from '../../classes/FicheReponses'
import PatientCard from './components/PatientCard';

const ListFichesPatients: FC = () => {

  const { listeFichesPatient } = useSelector((state: RootState)=> state.listeFichesPatient )

  const [loading, setLoading] = useState<boolean>(false)
  const [loadingExport, setLoadingExport] = useState<boolean>(false)

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

  return (
    <View style={{paddingHorizontal:10}}>
      <FlatList
        data={listSortedByDate(listeFichesPatient)}
        keyExtractor={(item: FicheReponses) => item.id.toString()}
        renderItem = {({item, index}) => (
          <PatientCard key={index.toString()} index={index} fiche={item}  loading={loading} exportPDF={exportPDF} loadingExport={loadingExport}/>
        )}
        ListHeaderComponent={
          <Text style={{fontSize:30, color: "black", fontWeight:'bold', textAlign:"center", marginVertical:30}}>
            Liste des Fiches Patients
          </Text>
        }
        ListEmptyComponent={<Text style={{fontFamily:"FrankRuhlLibre-Regular", fontSize:25, color:"black"}}>Aucun patient dans la base de données.</Text>}
      />
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