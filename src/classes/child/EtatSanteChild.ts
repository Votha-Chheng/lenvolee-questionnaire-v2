import { MaladieGraveChild } from "./MaladieGraveChild"
import { MedicamentsChild } from "./MedicamentsChild"
import { OperationChild } from "./OperationChild"

export type EtatDeSanteChild = {
  problemeSante: boolean|undefined
  surveillanceMedicale: boolean|undefined
  periodeSurveillanceMedicale?: string
  raisonSurveillanceMedicale?: string
  priseMedicamentsChild: boolean|undefined
  listeMedicamentsChild?: MedicamentsChild[]
  allergiesMedicamentsOuiNon: boolean|undefined
  listeAllergiesMedicaments?: string[]
  maladieGraveOuiNon: boolean|undefined
  listeMaladiesGraves?: MaladieGraveChild[]
  operationOuiNon: boolean|undefined
  listeOperations? : OperationChild[]
  autresAntecedentsMedicauxOuiNon: boolean|undefined
  autresAntecedentsMedicaux?: string
}