import { createSlice } from "@reduxjs/toolkit"
import { DiversInfos } from "../../classes/adult/DiversInfos"

const initialState: DiversInfos = {
  appareilDentaireUneFois:undefined, //
  preoccupationDentsOuiNon:undefined, //
  preoccupationDents:"",
  modifierDentsOuiNon:undefined, //
  modifierDents:"",
  anxieuxSoinsDentaires:undefined, //
  commentConnaissezVousLeCabinet:undefined, //
  autresRemarquesUtilesOuiNon:undefined, //
  autresRemarquesUtiles:""
}

const diversInfosSlice = createSlice({
  name: "diversInfos",
  initialState,
  reducers: {
    resetDiversInfo : (state) => {
      state.appareilDentaireUneFois = undefined, //
      state.preoccupationDentsOuiNon = undefined, //
      state.preoccupationDents = "",
      state.modifierDentsOuiNon = undefined, //
      state.modifierDents = "",
      state.anxieuxSoinsDentaires = undefined, //
      state.commentConnaissezVousLeCabinet = undefined, //
      state.autresRemarquesUtilesOuiNon = undefined, //
      state.autresRemarquesUtiles = ""
    },
    getAppareilDentaireUneFois : (state, action) =>{
      state.appareilDentaireUneFois = action.payload
    },
    getPreoccupationDentsOuiNon : (state, action) =>{
      state.preoccupationDentsOuiNon = action.payload
    },
    getPreoccupationDents : (state, action) =>{
      state.preoccupationDents = action.payload
    },
    getModifierDentsOuiNon : (state, action) =>{
      state.modifierDentsOuiNon = action.payload
    },
    getModifierDents : (state, action) =>{
      state.modifierDents = action.payload
    },
    getAnxieuxSoinsDentaires : (state, action) =>{
      state.anxieuxSoinsDentaires = action.payload
    },
    getCommentConnaissezVousLeCabinet : (state, action) =>{
      state.commentConnaissezVousLeCabinet = action.payload
    },
    getAutresRemarquesUtilesOuiNon : (state, action) =>{
      state.autresRemarquesUtilesOuiNon = action.payload
    },
    getAutresRemarquesUtiles : (state, action) =>{
      state.autresRemarquesUtiles = action.payload
    }
  }
})

export const {
  resetDiversInfo, 
  getAppareilDentaireUneFois, 
  getPreoccupationDentsOuiNon, 
  getPreoccupationDents, 
  getModifierDentsOuiNon, 
  getModifierDents, 
  getAnxieuxSoinsDentaires, 
  getCommentConnaissezVousLeCabinet, 
  getAutresRemarquesUtilesOuiNon, 
  getAutresRemarquesUtiles} = diversInfosSlice.actions

export default diversInfosSlice.reducer