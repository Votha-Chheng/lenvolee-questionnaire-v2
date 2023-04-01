import { resetConsultationInfo } from "../store/adultState/consultationInfo";
import { resetDentsInfo } from "../store/adultState/dentsInfo";
import { resetDiversInfo } from "../store/adultState/diversInfo";
import { resetEsthetique } from "../store/adultState/esthetiqueInfo";
import { resetGencives } from "../store/adultState/gencives";
import { resetHabitudesInfo } from "../store/adultState/habitudesInfo";
import { resetHygieneDentaire } from "../store/adultState/hygieneDentaireInfo";
import { resetIdentityAdult } from "../store/adultState/identityAdult";
import { resetMachoire } from "../store/adultState/machoire";
import { resetMedicalHistory } from "../store/adultState/medicalInfo";
import { resetConsultationChild } from "../store/childState/consultationChild";
import { resetEtatBuccoDentaire } from "../store/childState/etatBuccoDentaire";
import { resetEtatDeSanteChild } from "../store/childState/etatSanteChild";
import { resetIdentityAccompagnant } from "../store/childState/identityAccompagnant";
import { resetIdentityChild } from "../store/childState/identityChild";

export const resetAdultGlobalState = (
  dispatch: Function, 
): void=> {
  dispatch(resetIdentityAdult())
  dispatch(resetMedicalHistory())
  dispatch(resetMachoire())
  dispatch(resetHygieneDentaire())
  dispatch(resetHabitudesInfo())
  dispatch(resetGencives())
  dispatch(resetEsthetique())
  dispatch(resetDiversInfo())
  dispatch(resetConsultationInfo())
  dispatch(resetDentsInfo())
}

export const resetChildGlobalState = (
  dispatch: Function, 
): void=> {
  dispatch(resetConsultationChild())
  dispatch(resetEtatBuccoDentaire())
  dispatch(resetEtatDeSanteChild())
  dispatch(resetIdentityAccompagnant())
  dispatch(resetIdentityChild())
}