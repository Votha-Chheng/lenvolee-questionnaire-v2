import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { FicheReponses } from '../../classes/FicheReponses'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Loader from '../../sharedUI/layout/Loader'
import VisualizeAdultForm from './components/VisualizeAdultForm'
import VisualizeChildForm from './components/VisualizeChildForm'

type VisualizeFormScreenProps = {
  id: number
}

const VisualizeFormScreen: FC<VisualizeFormScreenProps> = ({id}) => {
  const [loading, setLoading] = useState <boolean>(false)
  const [fiche, setFiche] = useState <FicheReponses>()

  const { listeFichesPatient } = useSelector((state: RootState)=> state.listeFichesPatient )

  useEffect(()=> {
    setLoading(true)
    const ficheResult = listeFichesPatient.find((fichePatient: FicheReponses)=> fichePatient.id === id)
    setFiche(ficheResult)
    setLoading(false)
  }, [])

  if(loading) return <Loader/>

  return (
    <View>
      {
        fiche === undefined 
        ? <Text>Une erreur est survenue lors du chargement de la fiche...</Text>
        : fiche.isAdult === true
        ? <VisualizeAdultForm fiche={fiche}/>
        : <VisualizeChildForm fiche={fiche}/>
      }
    </View>
  )
}

export default VisualizeFormScreen

const styles = StyleSheet.create({})