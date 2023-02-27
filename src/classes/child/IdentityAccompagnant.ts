import { Parent } from "./Parent"

export interface IdentityAccompagnant {
  responsablesParents?: boolean
  parentOne : Parent
  parentTwoOuiNon: boolean | undefined
  parentTwo?: Parent | null | string
  situationFamiliale?: string
}