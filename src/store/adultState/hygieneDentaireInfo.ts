import { createSlice } from "@reduxjs/toolkit"
import { HygieneDentaire } from "../../classes/adult/HygieneDentaire"

const initialState: HygieneDentaire = {
  typeBrosseADent:undefined, //
  momentsBrossageDents:undefined, //
  rythmeChangementBrosseAdent:undefined, //
  utilisationFilDentaireBrossette:undefined, //

} 

const hygieneDentaireSlice = createSlice ({
  name:"hygieneDentaire",
  initialState,
  reducers : {
    resetHygieneDentaire: (state) => {
      state = initialState
    },
    getTypeBrosseADent : (state, action) =>{
      state.typeBrosseADent = action.payload
    },
    getMomentsBrossageDents : (state, action) =>{
      state.momentsBrossageDents = action.payload
    },
    getRythmeChangementBrosseAdent : (state, action) =>{
      state.rythmeChangementBrosseAdent = action.payload
    },
    getUtilisationFilDentaireBrossette : (state, action) =>{
      state.utilisationFilDentaireBrossette = action.payload
    }
  }
})

export const { resetHygieneDentaire, getTypeBrosseADent, getMomentsBrossageDents, getRythmeChangementBrosseAdent, getUtilisationFilDentaireBrossette} = hygieneDentaireSlice.actions
export default hygieneDentaireSlice.reducer