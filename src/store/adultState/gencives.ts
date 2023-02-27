import { createSlice } from "@reduxjs/toolkit"
import { GencivesInfos } from "../../classes/adult/GencivesInfos"

const initialState: GencivesInfos = {
  dentsEcartes:undefined, //
  saignementGencive:undefined, //
  traitementGencive:undefined, //
  traitementGencivesPar:[],

} 

const gencivesSlice = createSlice ({
  name:"gencives",
  initialState,
  reducers : {
    resetGencives: (state) => {
      state = initialState
    },
    getDentsEcartes : (state, action) =>{
      state.dentsEcartes = action.payload
    },
    getSaignementGencive : (state, action) =>{
      state.saignementGencive = action.payload
    },
    getTraitementGencive : (state, action) =>{
      state.traitementGencive = action.payload
    },
    getTraitementGencivesPar : (state, action) =>{
      state.traitementGencivesPar = action.payload
    }
  }
})

export const { resetGencives, getDentsEcartes, getSaignementGencive, getTraitementGencive, getTraitementGencivesPar} = gencivesSlice.actions
export default gencivesSlice.reducer