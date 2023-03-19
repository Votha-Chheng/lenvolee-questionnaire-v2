import { FichePatient } from "./FichePatient";
import { ListeReponsesAdulte } from "./ListeReponsesAdultes";
import { ListeResponsesEnfant } from "./ListeResponsesEnfant";

export type FicheReponses = (FichePatient & ListeReponsesAdulte) | (FichePatient & ListeResponsesEnfant)