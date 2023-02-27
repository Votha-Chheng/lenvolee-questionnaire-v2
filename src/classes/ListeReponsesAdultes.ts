export type ListeReponsesAdulte = {
  dateDernierExamDentaire?:string //
  motifConsultation?:string //
  difficulteDentiste?:boolean //
  listeDifficulteDentiste?:string[]

  dentsExtraites?: boolean; //
  causesExtraction?: string[];
  dentsRemplacees?: boolean;
  moyenDentRemplacement?: string[];
  raisonsNonRemplacementDentsExtraites? : string;
  sensationProthesesActuelles?: string;
  utilisationMetaux?: boolean; //
  preferencesUtilisationMetaux?:string;
  dentsSensibles?:boolean; //
  listeSensibilite?: string[];

  appareilDentaireUneFois?: boolean; //
  preoccupationDentsOuiNon?: boolean; //
  preoccupationDents?:string;
  modifierDentsOuiNon?: boolean; //
  modifierDents?:string;
  anxieuxSoinsDentaires?: string; //
  commentConnaissezVousLeCabinet?: string; //
  autresRemarquesUtilesOuiNon?:boolean; //
  autresRemarquesUtiles?:string;

  dentsMemeCouleurs?: boolean
  souhaitDentsPlusBlanches?: boolean //
  satisfactionDentsGencives?: boolean //
  mainDevantBoucheSourire?: boolean //
  souhaitsChangementOuiNon?:boolean //
  souhaitsChangement?: string

  dentsEcartes?:boolean; //
  saignementGencive?:boolean; //
  traitementGencive?:boolean; //
  traitementGencivesPar?:string[];

  habitudes?: string[];
  mauvaiseHaleine?: boolean; //

  typeBrosseADent?:string[]; //
  momentsBrossageDents?:string[]; //
  rythmeChangementBrosseAdent?:string; //
  utilisationFilDentaireBrossette?: boolean; //

  dr?:string;
  dateRdv?: string;
  genre?: string;
  nom?: string; //
  prenom?:string; //
  dateDeNaissance?:string; //
  tel?: string; //
  emailOuiNon?: boolean; //
  email?:string;
  profession?:string; //
  adresse?:string; //
  codePostal?:number; //
  ville?:string; //

  serrementGrincementDents?:boolean; //
  craquementClaquementDouleurOuvertureMachoire?:boolean; //
  difficulteAvalerMacherCoteUnique?:boolean; //

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