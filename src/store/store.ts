import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import identityReducer from './adultState/identity'
import medicalHistoryReducer from './adultState/medicalInfo'
import consultationInfoReducer from './adultState/consultationInfo'
import gencivesReducer from './adultState/gencives'
import dentsInfosReducer from './adultState/dentsInfo'
import machoireReducer from './adultState/machoire'
import hygieneDentaireReducer from './adultState/hygieneDentaireInfo'
import habitudesInfoReducer from './adultState/habitudesInfo'
import esthetiqueInfoReducer from './/adultState/esthetiqueInfo'
import diversInfoReducer from './adultState/diversInfo'
import identityChildReducer from './childState/identityChild'
import identityAccompagnantReducer from './childState/identityAccompagnant'
import consultationChildReducer from './childState/consultationChild'
import etatSanteChildReducer from './childState/etatSanteChild'
import etatBuccoDentaireChildReducer from './childState/etatBuccoDentaire'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {persistReducer} from 'redux-persist'
import listefichesPatientsReducer from './listePatients/listefichesPatients'

const reducers = combineReducers({
  identity : identityReducer,
  medicalHistory : medicalHistoryReducer,
  consultationInfo : consultationInfoReducer,
  gencivesInfo : gencivesReducer,
  dentsInfo : dentsInfosReducer,
  machoireInfo : machoireReducer,
  hygienDentaireInfo : hygieneDentaireReducer,
  habitudesInfo : habitudesInfoReducer,
  esthetiqueInfo : esthetiqueInfoReducer,
  diversInfo : diversInfoReducer,
  identityChild : identityChildReducer,
  identityAccompagnant : identityAccompagnantReducer,
  consultationChild : consultationChildReducer,
  etatDeSanteChild : etatSanteChildReducer,
  etatBuccoDentaireChild: etatBuccoDentaireChildReducer,
  listeFichesPatient : listefichesPatientsReducer,
})

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ['listeFichesPatient']
  
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = ()=> useDispatch<AppDispatch>()

export default store