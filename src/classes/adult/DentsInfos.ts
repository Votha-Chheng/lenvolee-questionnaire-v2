export type DentsInfos = {
  dentsExtraites: boolean|undefined; //
  causesExtraction?: string[];
  dentsRemplacees: boolean|undefined;
  moyenDentRemplacement?: string[];
  raisonsNonRemplacementDentsExtraites? : string;
  sensationProthesesActuelles?: string;
  utilisationMetaux: boolean|undefined; //
  preferencesUtilisationMetaux?:string;
  dentsSensibles:boolean|undefined; //
  listeSensibilite?: string[];
}