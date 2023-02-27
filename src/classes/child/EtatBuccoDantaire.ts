import { Boisson } from "./Boisson"
import { DentCasse } from "./DentCasse"

export type EtatBuccoDentaire = {
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
  habitudesChild: string[]//
  anesthesieLocale?: boolean //
  anesthesieDentaire?: boolean//
  orthophonie?: boolean //
  troubleSommeil: string[]
  craintesGeneralesOuiNon?: boolean//
  listeCraintesGenerales?: string[]
  craintesDentiste?: boolean//
  remarquesUtilesOuiNon?: boolean//
  remarquesUtiles: string
}