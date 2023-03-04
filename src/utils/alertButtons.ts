import { Alert } from "react-native"

export const displayAlertWithTwoButtons = (mainMessage: string, mainMessageSecond: string, textForValidation: string, onPressOkFunction: Function)=> {
  Alert.alert(
    mainMessage,
    mainMessageSecond,
    [
      {
        text: "Annuler",
        style: "cancel"
      },
      { 
        text: textForValidation, 
        onPress: async()=>onPressOkFunction()
      }
    ]
  )
} 

export const displayAlertWithOneButton = (mainMessage: string, mainMessageSecond: string)=> {
  Alert.alert(
    mainMessage,
    mainMessageSecond,
    [
      {
        text: "Annuler",
        style: "cancel"
      }
    ]
  )
} 