import { Boisson } from "./child/Boisson"
import { DentCasse } from "./child/DentCasse"
import { MaladieGraveChild } from "./child/MaladieGraveChild"
import { MedicamentsChild } from "./child/MedicamentsChild"
import { OperationChild } from "./child/OperationChild"
import { Parent } from "./child/Parent"

export type ListeResponsesEnfant = {
  motif ?: string //
  firstVisitDentiste?:boolean //
  dateDerniereConsultation?:string, //
  radiosDentaires?:boolean
  firstVisiteCabinet?:boolean //
  commentConnaissezVousLeCabinet?:string//

  momentsBrossageDents?:string[] //
  brossageSeul?:  boolean //
  nbRepasParJour?: number //
  sucrerieOuiNon?: boolean //
  frequenceSucrerie?: string
  sodaOuiNon?: boolean //
  sodasListe?: Boisson[]
  cariesAvant?: boolean //
  dentEnleveOuiNon?: boolean //
  dentCasseOuiNon?: boolean //
  dentCasse?: DentCasse[]
  problemeApresTraitementDentaire?: boolean//
  traitementOrtho?: boolean//
  habitudesChild: string[]
  anesthesieLocale?: boolean //
  anesthesieDentaire?: boolean//
  orthophonie?: boolean //
  troubleSommeil: string[] //
  craintesGeneralesOuiNon?: boolean//
  listeCraintesGenerales?: string[]
  craintesDentiste?: boolean//
  remarquesUtilesOuiNon?: boolean//
  remarquesUtiles: string

  problemeSante?: boolean
  surveillanceMedicale?: boolean
  periodeSurveillanceMedicale?: string
  raisonSurveillanceMedicale?: string
  priseMedicamentsChild?: boolean
  listeMedicamentsChild?: MedicamentsChild[]
  allergiesMedicamentsOuiNon?: boolean
  listeAllergiesMedicaments?: string[]
  maladieGraveOuiNon?: boolean
  listeMaladiesGraves?: MaladieGraveChild[]
  operationOuiNon?: boolean
  listeOperations? : OperationChild[]
  autresAntecedentsMedicauxOuiNon?: boolean
  autresAntecedentsMedicaux : string

  responsablesParents?: boolean
  parentOne : Parent
  parentTwoOuiNon?: boolean
  parentTwo?: Parent | null | string
  situationFamiliale?: string

  dateRdv: string
  nom ?: string //
  prenom?:string //
  dateDeNaissance?:string, //
  telEnfant?:string
  adresse?:string //
  codePostal?:string//
  ville?:string//
  niveauScolaire? : string//
  hobbies: string[]
  fratrie? : boolean//
  nbreFrereSoeur?: number//
  place? : string//
}

  
