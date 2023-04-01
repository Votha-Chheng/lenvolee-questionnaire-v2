import { createSlice } from "@reduxjs/toolkit"
import { MachoireInfos } from "../../classes/adult/MachoireInfos"

const initialState: MachoireInfos = {
  serrementGrincementDents:undefined, //
  craquementClaquementDouleurOuvertureMachoire:undefined, //
  difficulteAvalerMacherCoteUnique:undefined //

} 

const machoireSlice = createSlice ({
  name:"machoireInfo",
  initialState,
  reducers : {
    resetMachoire: (state) => {
      state.serrementGrincementDents = undefined, //
      state.craquementClaquementDouleurOuvertureMachoire = undefined, //
      state.difficulteAvalerMacherCoteUnique = undefined //
    },
    getSerrementGrincementDents : (state, action) =>{
      state.serrementGrincementDents = action.payload
    },
    getCraquementClaquementDouleurOuvertureMachoire : (state, action) =>{
      state.craquementClaquementDouleurOuvertureMachoire = action.payload
    },
    getDifficulteAvalerMacherCoteUnique : (state, action) =>{
      state.difficulteAvalerMacherCoteUnique = action.payload
    }
  }
})

export const { resetMachoire, getSerrementGrincementDents, getCraquementClaquementDouleurOuvertureMachoire, getDifficulteAvalerMacherCoteUnique} = machoireSlice.actions
export default machoireSlice.reducer