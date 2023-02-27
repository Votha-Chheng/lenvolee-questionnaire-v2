import { View } from 'react-native'
import React, { FC } from 'react'
import { getCommentConnaissezVousLeCabinet, getDateDerniereConsultation, getFirstVisitDentiste, getFirstVisiteCabinet, getMotif, getRadiosDentaires } from '../../../store/childState/consultationChild'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { globalStyles } from '../../../utils/globalStyles'
import LabelInputForText from '../../../sharedUI/form/LabelInputFortText'
import Label from '../../../sharedUI/form/Label'
import RadioComponent from '../../../sharedUI/form/RadioComponent'
import BirthComponent from '../../../sharedUI/form/BirthComponent'
import AddText from '../../../sharedUI/form/AddText'

const ConsultationEnfant: FC = () => {

  const {firstVisitDentiste, dateDerniereConsultation, radiosDentaires, firstVisiteCabinet, commentConnaissezVousLeCabinet, motif} = useSelector((state: RootState)=> state.consultationChild)

  const dispatch = useDispatch()
  

  return (
    <View style={globalStyles.container}>
      <LabelInputForText statement={motif} question="Quel est le motif de la consultation pour l'enfant ?" reducerFromStore={getMotif} flexRow={false} minLengthForInput={0} width={500} />
      <View>
        <Label question="Est-ce sa 1ère visite chez le dentiste ?" statement={firstVisitDentiste} />
        <RadioComponent
          valueState={firstVisitDentiste}
          setValueToTrue={()=>{
            dispatch(getFirstVisitDentiste(true))
            dispatch(getDateDerniereConsultation(""))
          }}
          setValueToFalse={()=>{
            dispatch(getFirstVisitDentiste(false))
            dispatch(getDateDerniereConsultation(undefined))
          }}
        />
      </View>

      {
        firstVisitDentiste == false &&
        <View>
          <Label question="Quelle est la date de sa dernière consultation chez le dentiste (à quelques semaines près) ?" statement={dateDerniereConsultation}/>
          <BirthComponent statement={dateDerniereConsultation} reducerFromStore={getDateDerniereConsultation} />
        </View>
      }

      <View>
        <Label question="A-t-on déjà effectué des radios dentaires ?" statement={radiosDentaires} />
        <RadioComponent 
          valueState={radiosDentaires}
          setValueToTrue={()=>{
            dispatch(getRadiosDentaires(true))
          }}
          setValueToFalse={()=>{
            dispatch(getRadiosDentaires(false))
          }}
        />
      </View>
      <View>
        <Label question="Est-ce sa première visite dans ce cabinet ?" statement={firstVisiteCabinet} />
        <RadioComponent 
          valueState={firstVisiteCabinet}
          setValueToTrue={()=>{
            dispatch(getFirstVisiteCabinet(true))
          }}
          setValueToFalse={()=>{
            dispatch(getFirstVisiteCabinet(false))
          }}
        />
      </View>
      
      <AddText
        dispatcher={dispatch} 
        reducerFromStore={getCommentConnaissezVousLeCabinet} 
        statement={commentConnaissezVousLeCabinet} 
        questionForLabel="Comment avez-vous connu l'existence du cabinet ?" 
        placeHolder="Décrivez comment vous avez connu le cabinet..." 
      />
    </View>
  )
}

export default ConsultationEnfant
