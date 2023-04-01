import { useWindowDimensions, View } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { getAllergies, getAllergiesListe } from '../../../store/adultState/medicalInfo'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import { globalStyles } from '../../../utils/globalStyles'
import CheckBoxComponent from '../../../sharedUI/form/CheckboxComponent'
import { addRadioItem } from '../../../utils/addRadioItem'
import ComponentAutres from '../../../sharedUI/form/ComponentAutres'

const AllergiesPart: FC = () => {

  const {allergies, allergiesListe} = useSelector((state: RootState) => state.medicalInfos)

  const dispatch = useDispatch()
  const { width } = useWindowDimensions()

  const allergiesToTrue = (): void=>{
    dispatch(getAllergies(true))
    dispatch(getAllergiesListe(undefined))
  }
  const allergiesToFalse = (): void=>{
    dispatch(getAllergies(false))
    dispatch(getAllergiesListe([]))
  }

  return (
    <View>
      <Label
        question="Êtes-vous allergique à certains produits ou médicaments ? "
        statement={allergies}
      />
      <RadioComponent
        valueState={allergies} 
        setValueToTrue = {()=>allergiesToTrue()} 
        setValueToFalse = {()=>allergiesToFalse()}
      />

      {
        allergies &&
          <View>
            <Label
              question="À quoi êtes-vous allergique ? "
              statement={allergiesListe}
            />
            <View style={[globalStyles.flexRow, {alignItems:"flex-start"}]}>
              <View style={width>600 ? {marginLeft:10}: {marginLeft:0}}>
                <CheckBoxComponent title="Anesthésique local du dentiste" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>
                <CheckBoxComponent title="Iode et produits dérivés" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>
                <CheckBoxComponent title="Métal" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>
                <CheckBoxComponent title="Antibiotique" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>    
                <CheckBoxComponent title="Latex" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>
              </View>
              <View style={width>600 ? {marginLeft:10}: {marginLeft:0}}>
                <CheckBoxComponent title="Barbituriques" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>
                <CheckBoxComponent title="Anti-inflammatoire/aspirine" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>
                <CheckBoxComponent title="Neuroleptique/somnifère" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>
                <CheckBoxComponent title="Codéine" maladies={allergiesListe} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getAllergiesListe}/>
              </View>
            </View>
            <ComponentAutres stateArray={allergiesListe} reducerFromStore={getAllergiesListe} extraItem="Autre allergie" placeHolder="Allergie" />
          </View>

      }
    </View>
  )
}

export default AllergiesPart

