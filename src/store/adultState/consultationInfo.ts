import { createSlice } from "@reduxjs/toolkit";
import { ConsultationInfo } from "../../classes/adult/ConsultationInfo";

const initialState: ConsultationInfo = {
  dateDernierExamDentaire:undefined, //
  motifConsultation:undefined, //
  difficulteDentiste:undefined, //
  listeDifficulteDentiste:[],
}

const consultationInfoSlice = createSlice({
  name: 'consultationInfo',
  initialState,
  reducers: {
    resetConsultationInfo: (state) => {
      state = initialState
    },
    getDateDernierExamDentaire: (state, action) => {
      state.dateDernierExamDentaire = action.payload
    },
    getMotifConsultation: (state, action) => {
      state.motifConsultation = action.payload
    },
    getDifficulteDentiste: (state, action) => {
      state.difficulteDentiste = action.payload
    },
    getListeDifficulteDentiste: (state, action) => {
      state.listeDifficulteDentiste = action.payload
    }
  }
})

export const {resetConsultationInfo, getDateDernierExamDentaire, getDifficulteDentiste, getListeDifficulteDentiste, getMotifConsultation} = consultationInfoSlice.actions

export default consultationInfoSlice.reducer