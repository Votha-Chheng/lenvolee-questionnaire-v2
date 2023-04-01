import { createSlice } from "@reduxjs/toolkit";
import { IdentityAdult } from "../../classes/adult/IdentityAdult";

const initialState: IdentityAdult = {
  dr:"Sylvie MA-Francin",
  dateRdv : new Date(Date.now()).toString(),
  genre : "Madame",
  nom : undefined, //
  prenom:undefined, //
  dateDeNaissance:undefined, //
  tel:undefined, //
  emailOuiNon: undefined,//
  email:"", 
  profession:undefined, //
  adresse:undefined, //
  codePostal:undefined, //
  ville:undefined //
}

const identitySlice = createSlice({
  name: 'identityAdult',
  initialState,
  reducers: {
    resetIdentityAdult: (state) => {
      state.dr="Sylvie MA-Francin",
      state.dateRdv = new Date(Date.now()).toString(),
      state.genre = "Madame",
      state.nom = undefined, //
      state.prenom = undefined, //
      state.dateDeNaissance = undefined, //
      state.tel = undefined, //
      state.emailOuiNon = undefined,//
      state.email = "", 
      state.profession = undefined, //
      state.adresse = undefined, //
      state.codePostal = undefined, //
      state.ville = undefined //
    },
    getDr: (state, action) => {
      state.dr = action.payload
    },
    getNom: (state, action) => {
      state.nom = action.payload
    },
    getPrenom: (state, action) => {
      state.prenom = action.payload
    },
    getGenre: (state, action) => {
      state.genre = action.payload
    },
    getDateRdv: (state, action) => {
      state.dateRdv = action.payload
    },
    getDateDeNaissance: (state, action) => {
      state.dateDeNaissance = action.payload
    },
    getTel: (state, action) => {
      state.tel = action.payload
    },
    getEmailOuiNon: (state, action) => {
      state.emailOuiNon = action.payload
    },
    getEmail: (state, action) => {
      state.email = action.payload
    },
    getProfession: (state, action) => {
      state.profession = action.payload
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

export const {resetIdentityAdult, getDr, getNom, getPrenom, getGenre, getDateRdv, getDateDeNaissance, getTel, getEmail, getEmailOuiNon, getProfession, getAdresse, getCodePostal, getVille} = identitySlice.actions

export default identitySlice.reducer