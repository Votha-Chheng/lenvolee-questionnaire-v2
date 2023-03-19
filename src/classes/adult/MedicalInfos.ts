export type MedicalInfos = {
  medecinTraitant?: string; //
  dateDernierExamen?:string; //
  changementEtatSante?:boolean; //
  maladies: string[];
  saignementInterventionAccident?:boolean; //
  traitementRadiations?:boolean; //
  priseMedicamentActuelle?:boolean;
  medicamentsActuels?:string[];
  allergies?: boolean; //
  allergiesListe?:string[];
  fumeur?: boolean; //
  cigarettesParJour?:string|null;
  enceinte?:boolean; //
  moisDeGrossesse?:string|null;
  pilule?:boolean;
  osteoporose?:boolean; //
  medicOsteoporose?:string[];
}