export type MedicalInfos = {
  medecinTraitant: string|undefined; //
  dateDernierExamen:string|undefined; //
  changementEtatSante:boolean|undefined; //
  maladies: string[];
  saignementInterventionAccident:boolean|undefined; //
  traitementRadiations:boolean|undefined; //
  priseMedicamentActuelle:boolean|undefined;
  medicamentsActuels?:string[];
  allergies: boolean|undefined; //
  allergiesListe?:string[];
  fumeur: boolean|undefined; //
  cigarettesParJour?:string|null;
  enceinte?:boolean; //
  moisDeGrossesse?:string|null;
  pilule?:boolean;
  osteoporose?:boolean; //
  medicOsteoporose?:string[];
}