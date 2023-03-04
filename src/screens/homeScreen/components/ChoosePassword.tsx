import { Text, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import { globalStyles } from '../../../utils/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { setPassword } from '../../../store/password/password'
import { displayAlertWithOneButton } from '../../../utils/alertButtons'

type ChoosePasswordProps = {
  setToNewPassword: Dispatch<SetStateAction<boolean>>
}
const ChoosePassword: FC<ChoosePasswordProps> = ({setToNewPassword}) => {

  const [newMotDePasseInput, setNewMotDePasseInput] = useState<string>("")
  const [confirmNewMotDePasseInput, setConfirmNewMotDePasseInput] = useState<string>("")
  const [oldMotDePasseInput, setOldMotDePasseInput] = useState<string>("")

  const { password } = useSelector((state: RootState)=> state.password)

  const dispatch = useDispatch()

  const handleNewPasswordValidation = (oldPassword: string, newPassword: string, confirmPassword: string): void=> {
    if(password === undefined){
      if(newPassword === confirmPassword){
        dispatch(setPassword(newPassword))
        setOldMotDePasseInput("")
        setNewMotDePasseInput("")
        setConfirmNewMotDePasseInput("")
        setToNewPassword(false)

      } else {
        setOldMotDePasseInput("")
        setNewMotDePasseInput("")
        setConfirmNewMotDePasseInput("")
        displayAlertWithOneButton(
          "Absence de correspondance...", 
          "Les deux mots de passe ne correspondent pas." 
        )
      }

    } else {
      if(oldPassword === password) {
        if(newPassword !== ""){
          dispatch(setPassword(newPassword))
          setToNewPassword(false)

        } else {
          setOldMotDePasseInput("")
          setNewMotDePasseInput("")
          setConfirmNewMotDePasseInput("")

          displayAlertWithOneButton(
            "Quel est le nouveau mot de passe ?", 
            "Il semblerait que vous n'ayez pas rentrer de nouveau mot de passe ou d'ancien mot de passe."
          )
        }
      } else {
        setOldMotDePasseInput("")
        setNewMotDePasseInput("")
        setConfirmNewMotDePasseInput("")

        displayAlertWithOneButton(
          "Il semble y avoir une erreur...", 
          "L'ancien mot de passe ne correspond pas au mot de passe actuel." 
        )
      }
    }
  }

  return (
    <View style={{alignItems:"center", width:"100%", paddingHorizontal:20}}>
      {
      password !== undefined &&
      <View style={globalStyles.homeInputContainer}>
        <Text style={globalStyles.label}>Tapez l'ancien mot de passe :</Text>
        <TextInput
          value={oldMotDePasseInput}
          style={[globalStyles.input, { width:"100%" }]}
          onChangeText={(text: string)=>setOldMotDePasseInput(text)}
          secureTextEntry={true}
        />
      </View>
      }
      <View style={globalStyles.homeInputContainer}>
        <Text style={globalStyles.label}>Tapez le nouveau mot de passe :</Text>
        <TextInput
          value={newMotDePasseInput}
          style={[globalStyles.input]}
          onChangeText={(text: string)=>setNewMotDePasseInput(text)}
          secureTextEntry={true}
        />
      {
        password === undefined &&
        <View>
          <Text style={globalStyles.label} >Confirmer le nouveau mot de passe :</Text>
          <TextInput
          value={confirmNewMotDePasseInput}
            style={[globalStyles.input]}
            onChangeText={(text: string)=>setConfirmNewMotDePasseInput(text)}
            secureTextEntry={true}
          />
        </View>
      }
      </View>
      <View style={globalStyles.flexRow}>
        <Button
          disabled={password === undefined ? true: false}
          buttonColor='red'
          style={{height:50, marginVertical:20, width:"40%", marginHorizontal:2.5}}
          labelStyle={{fontSize:20, flex:1, color:"#fff", justifyContent:"center", paddingTop:5}}
          onPress={()=>{
            setOldMotDePasseInput("")
            setNewMotDePasseInput("")
            setConfirmNewMotDePasseInput("")
            setToNewPassword(false)
          }}
        >
          Annuler
        </Button>
        <Button
          buttonColor='green'
          style={{height:50, marginVertical:20, width:"40%", marginHorizontal:2.5}}
          labelStyle={{fontSize:20, flex:1, color:"#fff", justifyContent:"center", paddingTop:5}}
          onPress={()=>handleNewPasswordValidation(oldMotDePasseInput, newMotDePasseInput, confirmNewMotDePasseInput)}
        >
          Valider
        </Button>
      </View>
    </View>
  )
}

export default ChoosePassword
