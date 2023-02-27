import { createSlice } from "@reduxjs/toolkit"
import { HabitudesInfos } from "../../classes/adult/HabitudesInfos"

const initialState: HabitudesInfos = {
  habitudes  :[],
  mauvaiseHaleine : undefined, //

} 

const habitudeSlice = createSlice ({
  name:"habitudesInfo",
  initialState,
  reducers : {
    resetHabitudesInfo: (state) => {
      state = initialState
    },
    getHabitudes : (state, action) =>{
      state.habitudes = action.payload
    },
    getMauvaiseHaleine : (state, action) =>{
      state.mauvaiseHaleine = action.payload
    }
  }
})

export const { resetHabitudesInfo, getHabitudes, getMauvaiseHaleine} = habitudeSlice.actions
export default habitudeSlice.reducer