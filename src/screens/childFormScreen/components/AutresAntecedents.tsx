import { View } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import { getAutresAntecedentsMedicaux, getAutresAntecedentsMedicauxOuiNon } from '../../../store/childState/etatSanteChild'
import AddText from '../../../sharedUI/form/AddText'

const AutresAntecedents: FC = () => {
  const {autresAntecedentsMedicauxOuiNon, autresAntecedentsMedicaux} = useSelector((state: RootState) => state.etatDeSanteChild)
  
  const dispatch = useDispatch()

  return (
    <View>
      <View>
        <Label question="A-t-il d’autres antécédents médicaux ?" statement={autresAntecedentsMedicauxOuiNon} />
        <RadioComponent
          valueState={autresAntecedentsMedicauxOuiNon}
          setValueToTrue={()=>{
            dispatch(getAutresAntecedentsMedicauxOuiNon(true))
            dispatch(getAutresAntecedentsMedicaux(undefined))

          }}
          setValueToFalse={()=>{
            dispatch(getAutresAntecedentsMedicauxOuiNon(false))
            dispatch(getAutresAntecedentsMedicaux(""))
            
          }}
        />
      </View>
      {
        autresAntecedentsMedicauxOuiNon === true &&
        <AddText
          dispatcher={dispatch} 
          reducerFromStore={getAutresAntecedentsMedicaux} 
          statement={autresAntecedentsMedicaux} 
          questionForLabel="Quels sont ces antécédents médicaux ?" 
          placeHolder="Écrivez ici tous ses autres antécédents médicaux..."
          parentStateShouldBe={true}
        />
      }
    </View>
   )
 }

export default AutresAntecedents