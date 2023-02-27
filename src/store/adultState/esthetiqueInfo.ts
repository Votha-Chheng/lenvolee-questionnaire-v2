import { createSlice } from "@reduxjs/toolkit"
import EsthetiqueInfos from "../../classes/adult/EsthetiqueInfos"

const initialState: EsthetiqueInfos = {
  dentsMemeCouleurs : undefined,
  souhaitDentsPlusBlanches : undefined, //
  satisfactionDentsGencives: undefined, //
  mainDevantBoucheSourire : undefined, //
  souhaitsChangementOuiNon:undefined, //
  souhaitsChangement:"",

} 

const gencivesSlice = createSlice ({
  name:"esthetiqueInfo",
  initialState,
  reducers : {
    resetEsthetique: (state) => {
      state = initialState
    },
    getDentsMemeCouleurs : (state, action) =>{
      state.dentsMemeCouleurs = action.payload
    },
    getSouhaitDentsPlusBlanches : (state, action) =>{
      state.souhaitDentsPlusBlanches = action.payload
    },
    getSatisfactionDentsGencives : (state, action) =>{
      state.satisfactionDentsGencives = action.payload
    },
    getMainDevantBoucheSourire : (state, action) =>{
      state.mainDevantBoucheSourire = action.payload
    },
    getSouhaitsChangementOuiNon : (state, action) =>{
      state.souhaitsChangementOuiNon = action.payload
    },
    getSouhaitsChangement: (state, action) =>{
      state.souhaitsChangement= action.payload
    }
  }
})

export const { resetEsthetique, getDentsMemeCouleurs, getSouhaitDentsPlusBlanches, getSatisfactionDentsGencives, getMainDevantBoucheSourire, getSouhaitsChangementOuiNon, getSouhaitsChangement} = gencivesSlice.actions
export default gencivesSlice.reducer