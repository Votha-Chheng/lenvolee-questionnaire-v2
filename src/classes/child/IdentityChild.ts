export type IdentityChild = {
  dateRdv: string
  nom: string|undefined//
  prenom:string|undefined //
  dateDeNaissance:string|undefined, //
  telEnfant?:string
  adresse:string|undefined //
  codePostal:string|undefined//
  ville:string|undefined//
  niveauScolaire : string|undefined//
  hobbies?: string[]
  fratrie : boolean|undefined//
  nbreFrereSoeur?: number
  place? : string
}