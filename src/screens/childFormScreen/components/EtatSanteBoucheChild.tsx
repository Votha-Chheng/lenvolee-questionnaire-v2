import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { 
  getAnesthesieDentaire, 
  getAnesthesieLocale, getBrossageSeul, 
  getCariesAvant, getCraintesDentiste, 
  getCraintesGeneralesOuiNon, 
  getDentEnleveOuiNon, 
  getHabitudesChild, 
  getListeCraintesGenerales, 
  getMomentsBrossageDents, 
  getNbRepasParJour, 
  getOrthophonie, 
  getProblemeApresTraitementDentaire, 
  getRemarquesUtiles, 
  getRemarquesUtilesOuiNon, 
  getTraitementOrtho, 
  getTroubleSommeil 
} from '../../../store/childState/etatBuccoDentaire'
import { addRadioItem } from '../../../utils/addRadioItem'
import { globalStyles } from '../../../utils/globalStyles'
import Label from '../../../sharedUI/form/Label'
import CheckBoxComponent from '../../../sharedUI/form/CheckboxComponent'
import LabelWithRadio from '../../../sharedUI/form/LabelWithRadio'
import LabelInputForNumber from '../../../sharedUI/form/LabelInputForNumber'
import SucrerieComponent from './SucrerieComponent'
import BoissonChildComponent from './BoissonChildComponent'
import DentsCasses from './DentsCasses'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import ComponentAutres from '../../../sharedUI/form/ComponentAutres'
import BooleanAndText from '../../../sharedUI/form/BooleanAndText'

const EtatSanteBoucheChild: FC = () => {

  const {
    momentsBrossageDents, 
    brossageSeul, 
    nbRepasParJour, 
    cariesAvant, 
    dentEnleveOuiNon, 
    problemeApresTraitementDentaire, 
    traitementOrtho, 
    habitudesChild,
    anesthesieLocale,
    anesthesieDentaire,
    orthophonie,
    troubleSommeil,
    craintesGeneralesOuiNon,
    listeCraintesGenerales,
    craintesDentiste,
    remarquesUtilesOuiNon,
    remarquesUtiles
  } = useSelector((state: RootState)=> state.etatBuccoDentaireChild)

  const dispatch = useDispatch()

  const hendleChangeNbRepas = (text: string)=>{
    if(text.length<1){
      dispatch(getNbRepasParJour(undefined))

    } else {
      dispatch(getNbRepasParJour(+text))

    }
  }

  return (
    <View style={globalStyles.container}>
      <View style={{marginVertical:20}}>
        <Label
          question="À quel(s) moment(s) de la journée se brosse-t-il les dents ?"
          statement={momentsBrossageDents}
        />
        <CheckBoxComponent title="Matin" maladies={momentsBrossageDents} handleChangeValues={addRadioItem}  dispatcher={dispatch} reducerFromStore={getMomentsBrossageDents}/>
        <CheckBoxComponent title="Midi" maladies={momentsBrossageDents} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getMomentsBrossageDents}/>
        <CheckBoxComponent title="Soir" maladies={momentsBrossageDents} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getMomentsBrossageDents}/>
        <CheckBoxComponent title="Jamais" maladies={momentsBrossageDents} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getMomentsBrossageDents}/>
      </View>

      <LabelWithRadio
        questionForLabel="Se brosse-t-il les dents tout seul ?"
        statementForLabel={brossageSeul}
        reducerFromStore={getBrossageSeul}
      />

      <LabelInputForNumber
        question="Combien de repas fait-il par jour ?"
        statement={nbRepasParJour}
        maxLength={2}
        onHandleChangeNumber={(text: string)=>hendleChangeNbRepas(text)}
        width={50}
      />

      <SucrerieComponent/>
      <BoissonChildComponent/>

      <LabelWithRadio
        statementForLabel={cariesAvant}
        questionForLabel="A-t-il déjà eu des caries dans le passé ?"
        reducerFromStore={getCariesAvant}
      />

      <LabelWithRadio
        statementForLabel={dentEnleveOuiNon}
        questionForLabel="Un dentiste lui a-t-il déjà enlevé une dent (de lait ou définitive) ?"
        reducerFromStore={getDentEnleveOuiNon}
      />

      <DentsCasses/>

      <LabelWithRadio
        statementForLabel={problemeApresTraitementDentaire}
        questionForLabel="A-t-il déjà eu un problème suite à un traitement dentaire ?"
        reducerFromStore={getProblemeApresTraitementDentaire}
      />

      <LabelWithRadio
        statementForLabel={traitementOrtho}
        questionForLabel="A-t-il déjà eu un traitement orthodontique ?"
        reducerFromStore={getTraitementOrtho}
      />
      
      <View style={{marginBottom:20}}>
        <Label
          statement={habitudesChild}
          question="Merci de cocher les habitudes qu'il peut avoir parmi les habitudes suivantes (ne rien cocher si aucune) "
        />
        <View>
          <CheckBoxComponent title="Sucer son pouce" maladies={habitudesChild} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getHabitudesChild} shouldBeUndefinedIfNull={false}/>
          <CheckBoxComponent title="Sucer une tétine" maladies={habitudesChild} handleChangeValues={addRadioItem}  dispatcher={dispatch} reducerFromStore={getHabitudesChild} shouldBeUndefinedIfNull={false}/>
          <CheckBoxComponent title="Se ronger les ongles" maladies={habitudesChild} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getHabitudesChild} shouldBeUndefinedIfNull={false}/>
        </View>
      </View>
      
      <LabelWithRadio
        statementForLabel={anesthesieLocale}
        questionForLabel="A-t-il déjà reçu une anesthésie locale ?"
        reducerFromStore={getAnesthesieLocale}
      />
      <LabelWithRadio
        statementForLabel={anesthesieDentaire}
        questionForLabel="A-t-il déjà reçu une anesthésie dentaire ?"
        reducerFromStore={getAnesthesieDentaire}
      />
      <LabelWithRadio
        statementForLabel={orthophonie}
        questionForLabel="A-t-il déjà eu des séances d’orthophonie ?"
        reducerFromStore={getOrthophonie}
      />

      <View style={{marginBottom:20}}>
        <Label
          question="Merci de cocher les troubles du sommeil qu'il peut avoir parmi les troubles suivants (ne rien cocher si aucune) :"
          statement={troubleSommeil}
        />
        <View>
          <CheckBoxComponent title="Ronflements " maladies={troubleSommeil} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getTroubleSommeil} shouldBeUndefinedIfNull={false}/>
          <CheckBoxComponent title="Apnée du sommeil " maladies={troubleSommeil} handleChangeValues={addRadioItem}  dispatcher={dispatch} reducerFromStore={getTroubleSommeil} shouldBeUndefinedIfNull={false}/>
          <CheckBoxComponent title="Grincements des dents" maladies={troubleSommeil} handleChangeValues={addRadioItem} dispatcher={dispatch} reducerFromStore={getTroubleSommeil} shouldBeUndefinedIfNull={false}/>
        </View>
      </View>

      <View>
        <Label
          question="A-t-il des craintes ou des phobies en général ?"
          statement={craintesGeneralesOuiNon}
        />
        <RadioComponent
          valueState={craintesGeneralesOuiNon}
          setValueToFalse={()=>{
            dispatch(getCraintesGeneralesOuiNon(false))
            dispatch(getListeCraintesGenerales([]))
          }}
          setValueToTrue={()=>{
            dispatch(getCraintesGeneralesOuiNon(true))
            dispatch(getListeCraintesGenerales(undefined))
          }}
        />

        {
          craintesGeneralesOuiNon === true &&
          <ComponentAutres
            stateArray={listeCraintesGenerales}
            reducerFromStore={getListeCraintesGenerales}
            extraItem="Quels sont ses craintes ?"
            placeHolder="Ecrivez ici une de ses craintes..."
            width={400}
          />
        }
      </View>

      <LabelWithRadio
        statementForLabel={craintesDentiste} 
        questionForLabel="A-t-il des craintes chez le dentiste ?"
        reducerFromStore={getCraintesDentiste}
      />

      <BooleanAndText
        booleanState={remarquesUtilesOuiNon}
        childState={remarquesUtiles}
        reducerFromStoreBoolean={getRemarquesUtilesOuiNon}
        reducerFromStore={getRemarquesUtiles}
        question="Avez-vous des remarques utiles à nous signaler ?"
        label="Quelles sont ces remarques ?"
        placeHolder="Écrivez ici toutes vos remarques..."
      />
    </View>
  )
}

export default EtatSanteBoucheChild