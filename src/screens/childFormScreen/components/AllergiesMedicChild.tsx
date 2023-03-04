import { View, useWindowDimensions} from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import { getAllergiesMedicamentsOuiNon, getListeAllergiesMedicaments } from '../../../store/childState/etatSanteChild'
import ComponentAutres from '../../../sharedUI/form/ComponentAutres'

const AllergiesMedicChild: FC = () => {
  const {allergiesMedicamentsOuiNon, listeAllergiesMedicaments} = useSelector((state: RootState) => state.etatDeSanteChild)

  const dispatch = useDispatch()

  const { width } = useWindowDimensions()

  return (
    <View>
      <View>
        <Label question="A-t-il des allergies médicamenteuses (pénicilline, antibiotiques, autres médicaments) " statement={allergiesMedicamentsOuiNon} />
        <RadioComponent
          valueState={allergiesMedicamentsOuiNon}
          setValueToTrue={()=>{
            dispatch(getAllergiesMedicamentsOuiNon(true))
            dispatch(getListeAllergiesMedicaments(undefined))

          }}
          setValueToFalse={()=>{
            dispatch(getAllergiesMedicamentsOuiNon(false))
            dispatch(getListeAllergiesMedicaments([]))
            
          }}
        />
      </View>
      {
        allergiesMedicamentsOuiNon === true &&
        <ComponentAutres
          stateArray={listeAllergiesMedicaments} 
          reducerFromStore={getListeAllergiesMedicaments} 
          extraItem="À quel(s) médicament est-il allergique ?" 
          placeHolder="Écrivez ici le médicament..."
          width={width <500 ? 200: 450}
        />
      }
    </View>
  )
}

export default AllergiesMedicChild