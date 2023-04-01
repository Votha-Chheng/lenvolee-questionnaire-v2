import { Parent } from "./Parent"

export type IdentityAccompagnant = {
  responsablesParents?: boolean
  parentOne : Parent
  parentTwoOuiNon: boolean | undefined
  parentTwo: Parent | null | string | undefined
  situationFamiliale: string|undefined
}