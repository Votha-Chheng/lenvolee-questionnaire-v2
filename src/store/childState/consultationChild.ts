import { createSlice } from "@reduxjs/toolkit";
import { ConsultationChild } from "../../classes/child/ConsultationChild";

const initialState: ConsultationChild = {
  motif : undefined, //
  firstVisitDentiste : undefined, //
  dateDerniereConsultation : "", //
  radiosDentaires: undefined,
  firstVisiteCabinet: undefined, //
  commentConnaissezVousLeCabinet: undefined//
}

const consultationChildSlice = createSlice({
  name: 'consultationChild',
  initialState,
  reducers: {
    resetConsultationChild: (state) => {
      state.motif = undefined, //
      state.firstVisitDentiste = undefined, //
      state.dateDerniereConsultation = "", //
      state.radiosDentaires = undefined,
      state.firstVisiteCabinet = undefined, //
      state.commentConnaissezVousLeCabinet = undefined//
    },
    getMotif: (state, action) => {
      state.motif = action.payload
    },
    getFirstVisitDentiste: (state, action) => {
      state.firstVisitDentiste = action.payload
    },
    getDateDerniereConsultation: (state, action) => {
      state.dateDerniereConsultation = action.payload
    },
    getRadiosDentaires: (state, action) => {
      state.radiosDentaires = action.payload
    },
    getFirstVisiteCabinet: (state, action) => {
      state.firstVisiteCabinet = action.payload
    },
    getCommentConnaissezVousLeCabinet: (state, action) => {
      state.commentConnaissezVousLeCabinet = action.payload
    }
  }
})

export const {resetConsultationChild, getCommentConnaissezVousLeCabinet, getDateDerniereConsultation, getFirstVisitDentiste, getFirstVisiteCabinet, getMotif, getRadiosDentaires} = consultationChildSlice.actions

export default consultationChildSlice.reducer