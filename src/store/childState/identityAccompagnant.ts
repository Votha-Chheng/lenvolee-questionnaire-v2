import { createSlice } from "@reduxjs/toolkit";
import { IdentityAccompagnant } from "../../classes/child/IdentityAccompagnant";

const initialState: IdentityAccompagnant = {
  responsablesParents: undefined,
  parentOne : {
    nom: undefined, //
    prenom: undefined, //
    tel: undefined, //
    emailOuiNon: undefined,
    email:"" ,
    profession: undefined, //
  }, 
  parentTwoOuiNon:undefined,
  parentTwo: null,
  situationFamiliale: undefined
}

const identityAcommpagnantSlice = createSlice({
  name: 'identityAccompagnant',
  initialState,
  reducers: {
    resetIdentityAccompagnant: (state) => {
      state.responsablesParents = undefined,
      state.parentOne = {
        nom: undefined, //
        prenom: undefined, //
        tel: undefined, //
        emailOuiNon: undefined,
        email:"" ,
        profession: undefined, //
      }, 
      state.parentTwoOuiNon = undefined,
      state.parentTwo = null,
      state.situationFamiliale = undefined
    },
    getResponsablesParents: (state, action) => {
      state.responsablesParents = action.payload
    },
    getParentOne: (state, action) => {
      state.parentOne = action.payload
    },
    getParentTwoOuiNon: (state, action) => {
      state.parentTwoOuiNon = action.payload
    },
    getParentTwo: (state, action) => {
      state.parentTwo = action.payload
    },
    getSituationFamiliale: (state, action) => {
      state.situationFamiliale = action.payload
    }
  }
})

export const {resetIdentityAccompagnant, getParentOne, getParentTwo, getParentTwoOuiNon, getResponsablesParents, getSituationFamiliale} = identityAcommpagnantSlice.actions

export default identityAcommpagnantSlice.reducer