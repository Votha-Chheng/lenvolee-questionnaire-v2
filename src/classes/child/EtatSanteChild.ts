import { MaladieGraveChild } from "./MaladieGraveChild"
import { MedicamentsChild } from "./MedicamentsChild"
import { OperationChild } from "./OperationChild"

export type EtatDeSanteChild = {
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
}