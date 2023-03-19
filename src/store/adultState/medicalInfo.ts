import { createSlice } from "@reduxjs/toolkit";
import { MedicalInfos } from "../../classes/adult/MedicalInfos";

const initialState: MedicalInfos = {
  medecinTraitant : undefined, //
  dateDernierExamen:undefined, //
  changementEtatSante:undefined, //
  maladies:[],
  saignementInterventionAccident:undefined, //
  traitementRadiations:undefined, //
  priseMedicamentActuelle:undefined,
  medicamentsActuels:[],
  allergies : undefined, //
  allergiesListe:[],
  fumeur:undefined, //
  cigarettesParJour:null,
  enceinte :undefined, //
  moisDeGrossesse:null,
  pilule:undefined,
  osteoporose:undefined, //
  medicOsteoporose :[],
}

const medicalInfosSlice = createSlice({
  name: 'medicalInfos',
  initialState,
  reducers: {
    resetMedicalHistory: (state) => {
      state = initialState
    },
    getMedecinTraitant: (state, action) => {
      state.medecinTraitant = action.payload
    },
    getDateDernierExamen: (state, action) => {
      state.dateDernierExamen = action.payload
    },
    getChangementEtatSante: (state, action) => {
      state.changementEtatSante = action.payload
    },
    getMaladies: (state, action) => {
      state.maladies = action.payload
    },
    getSaignementInterventionAccident: (state, action) => {
      state.saignementInterventionAccident = action.payload
    },
    getTraitementRadiations: (state, action) => {
      state.traitementRadiations = action.payload
    },
    getPriseMedicamentActuelle: (state, action) => {
      state.priseMedicamentActuelle = action.payload
    },
    getMedicamentsActuels: (state, action) => {
      state.medicamentsActuels = action.payload
    },
    getAllergies: (state, action) => {
      state.allergies = action.payload
    },
    getAllergiesListe: (state, action) => {
      state.allergiesListe = action.payload
    },
    getFumeur: (state, action) => {
      state.fumeur = action.payload
    },
    getCigarettesParJour: (state, action) => {
      state.cigarettesParJour = action.payload
    },
    getEnceinte: (state, action) => {
      state.enceinte = action.payload
    },
    getMoisDeGrossesse: (state, action) => {
      state.moisDeGrossesse = action.payload
    },
    getPilule: (state, action) => {
      state.pilule = action.payload
    },
    getOsteoporose: (state, action) => {
      state.osteoporose = action.payload
    },
    getMedicOsteoporose: (state, action) => {
      state.medicOsteoporose = action.payload
    },
  }
})

export const {
  resetMedicalHistory, 
  getMedecinTraitant, 
  getDateDernierExamen, 
  getChangementEtatSante, 
  getMaladies, 
  getSaignementInterventionAccident, 
  getTraitementRadiations, 
  getPriseMedicamentActuelle, 
  getMedicamentsActuels, 
  getAllergies, 
  getAllergiesListe, 
  getFumeur, 
  getCigarettesParJour, 
  getEnceinte, 
  getMoisDeGrossesse, 
  getPilule, 
  getOsteoporose,
  getMedicOsteoporose} 
  = medicalInfosSlice.actions

export default medicalInfosSlice.reducer