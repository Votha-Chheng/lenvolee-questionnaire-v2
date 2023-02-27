import { View } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { globalStyles } from '../../../utils/globalStyles'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import { getListeMedicamentsChild, getPriseMedicamentsChild } from '../../../store/childState/etatSanteChild'
import ComponentAutresForObject from '../../../sharedUI/form/ComponentAutresForObject'

const MedicamentChild: FC = () => {
  const {priseMedicamentsChild, listeMedicamentsChild} = useSelector((state: RootState) => state.etatDeSanteChild)

  const dispatch = useDispatch()

    return (
    <View style={globalStyles.marginBottomSpace}>
      <View>
        <Label question="Prend-il des médicaments en ce moment ?" statement={priseMedicamentsChild} />
        <RadioComponent
          valueState={priseMedicamentsChild}
          setValueToTrue={()=>{
            dispatch(getPriseMedicamentsChild(true))
            dispatch(getListeMedicamentsChild(undefined))

          }}
          setValueToFalse={()=>{
            dispatch(getPriseMedicamentsChild(false))
            dispatch(getListeMedicamentsChild([]))
            
          }}
        />
      </View>
      {
        priseMedicamentsChild === true &&
        <ComponentAutresForObject
          arrayListe = {listeMedicamentsChild}
          reducerFromStore={getListeMedicamentsChild}
          valueForFilter="nomMedicament"
          valueSide="frequence"
          questionForLabel="Quel(s) médicament(s) et à quelle fréquence ?"
          liaison="tous/toutes les"
          unit=""
          placeHolderOne="Nom/type de médicament..."
          placeHolderTwo="Fréquence"
          keyboardForInput="default"
        />
      }
    </View>
  )
}

export default MedicamentChild