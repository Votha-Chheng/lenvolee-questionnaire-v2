import { View } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import { getSodaOuiNon, getSodasListe } from '../../../store/childState/etatBuccoDentaire'
import ComponentAutresForObject from '../../../sharedUI/form/ComponentAutresForObject'

const BoissonChildComponent:FC = () => {
  const {sodaOuiNon, sodasListe} = useSelector((state: RootState) => state.etatBuccoDentaireChild)

  const dispatch = useDispatch()

  return (
    <View style={{marginBottom:20}}>
      <View>
        <Label
          question="Consomme-t-il des boissons autres que de l’eau ?"
          statement={sodaOuiNon}
        />
      </View>
      <RadioComponent
        valueState = {sodaOuiNon}
        setValueToFalse={()=>{
          dispatch(getSodaOuiNon(false))
          dispatch(getSodasListe([]))
        }}
        setValueToTrue={()=>{
          dispatch(getSodaOuiNon(true))
          dispatch(getSodasListe(undefined))
        }}
      />
      {
        sodaOuiNon == true &&
        <ComponentAutresForObject
          reducerFromStore={getSodasListe}
          valueForFilter = "boisson"
          valueSide = "frequence"
          questionForLabel="Quelle(s) boisson(s) et à quelle fréquence ?"
          arrayListe={sodasListe}
          widthFirstInput={280}
          widthSecondInput={200}
          liaison="environ tous/toutes les"
          unit=""
          placeHolderOne = "Type de boisson..."
          placeHolderTwo = "Fréquence"
        />
      }
    </View>
  )
}

export default BoissonChildComponent
