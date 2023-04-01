import { createSlice } from "@reduxjs/toolkit";
import { IdentityChild } from "../../classes/child/IdentityChild";

const initialState: IdentityChild = {
  dateRdv: (new Date()).toString(),
  nom : undefined, //
  prenom: undefined, //
  dateDeNaissance: undefined, //
  telEnfant: "",
  adresse: undefined, //
  codePostal: undefined, //
  ville: undefined, //
  niveauScolaire: undefined, //
  hobbies: [],
  fratrie : undefined,
  nbreFrereSoeur: 0,
  place : ""
}

const identityChildSlice = createSlice({
  name: 'identityChild',
  initialState,
  reducers: {
    resetIdentityChild: (state) => {
      state = initialState
    },
    getDateRdv: (state, action) =>{
      state.dateRdv = action.payload
    },
    getNom: (state, action) => {
      state.nom = action.payload
    },
    getPrenom: (state, action) => {
      state.prenom = action.payload
    },
    getDateDeNaissance: (state, action) => {
      state.dateDeNaissance = action.payload
    },
    getTelEnfant: (state, action) => {
      state.telEnfant = action.payload
    },
    getNiveauScolaire: (state, action) => {
      state.niveauScolaire = action.payload
    },
    getHobbies: (state, action) => {
      state.hobbies = action.payload
    },
    getFratrie: (state, action) => {
      state.fratrie = action.payload
    },
    getNbreFrereSoeur: (state, action) => {
      state.nbreFrereSoeur = action.payload
    },
    getPlace: (state, action) => {
      state.place = action.payload
    },
    getAdresse: (state, action) => {
      state.adresse = action.payload
    },
    getCodePostal: (state, action) => {
      state.codePostal = action.payload
    },
    getVille: (state, action) => {
      state.ville = action.payload
    }
  }
})

export const {
  resetIdentityChild,
  getDateRdv,
  getNom,
  getPrenom,
  getDateDeNaissance,
  getTelEnfant,
  getAdresse,
  getCodePostal,
  getVille,
  getFratrie,
  getHobbies,
  getNbreFrereSoeur,
  getNiveauScolaire,
  getPlace
} = identityChildSlice.actions

export default identityChildSlice.reducer