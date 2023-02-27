import { createSlice } from "@reduxjs/toolkit"
import { FicheReponses } from "../../classes/FicheReponses"
import { ListeFichesPatient } from "../../classes/ListeFichesPatient"

const initialState: ListeFichesPatient = {
  listeFichesPatient: []
}

const listeFichesPatienSlice = createSlice({
  name: 'fichePatientAdulte',
  initialState,
  reducers: {
    resetListFichePatient:(state)=> {
      state.listeFichesPatient = []
    },
    deleteSingleFichePatientById: (state, action)=> {
      const newList = state.listeFichesPatient.filter((fiche: FicheReponses)=> fiche.id !== action.payload)
      state.listeFichesPatient = newList
    },
    setListeFichePatient: (state, action)=> {
      state.listeFichesPatient = action.payload
    }
  }
})

export const {resetListFichePatient, deleteSingleFichePatientById, setListeFichePatient} = listeFichesPatienSlice.actions

export default listeFichesPatienSlice.reducer