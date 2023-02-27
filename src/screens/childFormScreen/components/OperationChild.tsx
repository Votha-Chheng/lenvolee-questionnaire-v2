import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { globalStyles } from '../../../utils/globalStyles'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import { getListeOperations, getOperationOuiNon } from '../../../store/childState/etatSanteChild'
import ComponentAutresForObject from '../../../sharedUI/form/ComponentAutresForObject'

const OperationChild: FC = () => {
  const { operationOuiNon, listeOperations } = useSelector((state: RootState)=> state.etatDeSanteChild)

  const dispatch = useDispatch()

  return (
    <View style={globalStyles.marginBottomSpace}>
      <View>
        <Label question="A-t-il déjà subi une opération ?" statement={operationOuiNon} />
        <RadioComponent
          valueState={operationOuiNon}
          setValueToTrue={()=>{
            dispatch(getOperationOuiNon(true))
            dispatch(getListeOperations(undefined))

          }}
          setValueToFalse={()=>{
            dispatch(getOperationOuiNon(false))
            dispatch(getListeOperations([]))
            
          }}
        />
      </View>
      {
        operationOuiNon === true &&
        <ComponentAutresForObject
          arrayListe = {listeOperations}
          reducerFromStore={getListeOperations}
          valueForFilter="cause"
          valueSide="age"
          questionForLabel="Opéré(e) de quoi et à quel âge ?"
          liaison="à l'âge de"
          unit="an(s)"
          placeHolderOne="Cause de l'opération..."
          placeHolderTwo="âge"
          keyboardForInput="numeric"
        />
      }
    </View>
  )
}

export default OperationChild