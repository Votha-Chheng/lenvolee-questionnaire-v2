import { View } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import { getFrequenceSucrerie, getSucrerieOuiNon } from '../../../store/childState/etatBuccoDentaire'
import AddText from '../../../sharedUI/form/AddText'

const SucrerieComponent:FC = () => {

  const {sucrerieOuiNon, frequenceSucrerie} = useSelector((state: RootState) => state.etatBuccoDentaireChild)

  const dispatch = useDispatch()

  return (
    <View>
      <View>
        <Label question="Mange-t-il des sucreries ?" statement={sucrerieOuiNon} />
        <RadioComponent
          valueState={sucrerieOuiNon}
          setValueToTrue={()=>{
            dispatch(getSucrerieOuiNon(true))
            dispatch(getFrequenceSucrerie(undefined))
          }}
          setValueToFalse={()=>{
            dispatch(getSucrerieOuiNon(false))
            dispatch(getFrequenceSucrerie(""))
          }}
        />
      </View>
      {
        sucrerieOuiNon === true &&
        <AddText
          dispatcher={dispatch}
          reducerFromStore={getFrequenceSucrerie}
          statement={frequenceSucrerie}
          questionForLabel="À quelle fréquence mange-t-il des sucreries ?"
          placeHolder="Ecrivez ici sa fréquence de consommation de sucrerie..."
        />
      }
    </View>
  )
}

export default SucrerieComponent