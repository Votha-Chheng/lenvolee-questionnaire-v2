import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { FicheReponses } from '../../classes/FicheReponses'
import PatientCard from './components/PatientCard';

const ListFichesPatients: FC = () => {
  const { listeFichesPatient } = useSelector((state: RootState)=> state.listeFichesPatient )

  const listSortedByDate = (list: FicheReponses[])=> {
    const temp = [...list]
    return temp.reverse()
  }


  return (
    <View style={{paddingHorizontal:10}}>
      <FlatList
        data={listSortedByDate(listeFichesPatient)}
        keyExtractor={(item: FicheReponses) => item.id.toString()}
        renderItem = {({item, index}) => (
          <PatientCard key={index.toString()} index={index} fiche={item}/>
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