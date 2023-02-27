import { Alert } from "react-native"

export const saveIncompleteForm = (mainMessage: string, mainMessageSecond: string, textForValidation: string, onPressOkFunction: Function)=> {
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