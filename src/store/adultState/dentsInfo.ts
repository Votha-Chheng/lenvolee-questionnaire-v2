import { createSlice } from "@reduxjs/toolkit"
import { DentsInfos } from "../../classes/adult/DentsInfos"

const initialState: DentsInfos = {
  dentsExtraites:undefined, //
  causesExtraction : [],
  dentsRemplacees:undefined,
  moyenDentRemplacement : [],
  raisonsNonRemplacementDentsExtraites : "",
  sensationProthesesActuelles:undefined,
  utilisationMetaux:undefined, //
  preferencesUtilisationMetaux:"",
  dentsSensibles:undefined, //
  listeSensibilite : [],
}

const dentsInfosSlice = createSlice({
  name: "dentsInfo",
  initialState,
  reducers: {
    resetDentsInfo : (state) => {
      state = initialState
    },
    getDentsExtraites : (state, action) =>{
      state.dentsExtraites = action.payload
    },
    getCausesExtraction : (state, action) =>{
      state.causesExtraction = action.payload
    },
    getDentsRemplacees : (state, action) =>{
      state.dentsRemplacees = action.payload
    },
    getMoyenDentRemplacement : (state, action) =>{
      state.moyenDentRemplacement = action.payload
    },
    getRaisonsNonRemplacementDentsExtraites : (state, action) =>{
      state.raisonsNonRemplacementDentsExtraites = action.payload
    },
    getSensationProthesesActuelles : (state, action) =>{
      state.sensationProthesesActuelles = action.payload
    },
    getUtilisationMetaux : (state, action) =>{
      state.utilisationMetaux = action.payload
    },
    getPreferencesUtilisationMetaux : (state, action) =>{
      state.preferencesUtilisationMetaux = action.payload
    },
    getDentsSensibles : (state, action) =>{
      state.dentsSensibles = action.payload
    },
    getListeSensibilite : (state, action) =>{
      state.listeSensibilite = action.payload
    }
  }
})

export const {resetDentsInfo, getDentsExtraites, getCausesExtraction, getDentsRemplacees, getMoyenDentRemplacement, getRaisonsNonRemplacementDentsExtraites, getSensationProthesesActuelles, getUtilisationMetaux, getPreferencesUtilisationMetaux, getDentsSensibles, getListeSensibilite} = dentsInfosSlice.actions

export default dentsInfosSlice.reducer