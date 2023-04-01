import { Boisson } from "./Boisson"
import { DentCasse } from "./DentCasse"

export type EtatBuccoDentaire = {
  momentsBrossageDents:string[]|undefined//
  brossageSeul:  boolean|undefined//
  nbRepasParJour: number|undefined //
  sucrerieOuiNon?: boolean|undefined //
  frequenceSucrerie?: string
  sodaOuiNon: boolean|undefined //
  sodasListe?: Boisson[]
  cariesAvant: boolean|undefined //
  dentEnleveOuiNon: boolean|undefined //
  dentCasseOuiNon: boolean|undefined //
  dentCasse?: DentCasse[]
  problemeApresTraitementDentaire: boolean|undefined//
  traitementOrtho: boolean|undefined//
  habitudesChild: string[]//
  anesthesieLocale: boolean|undefined //
  anesthesieDentaire: boolean|undefined//
  orthophonie: boolean|undefined //
  troubleSommeil: string[]
  craintesGeneralesOuiNon: boolean|undefined//
  listeCraintesGenerales?: string[]
  craintesDentiste: boolean|undefined//
  remarquesUtilesOuiNon: boolean|undefined//
  remarquesUtiles?: string
}