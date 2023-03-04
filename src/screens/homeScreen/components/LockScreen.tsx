import { StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { globalStyles } from '../../../utils/globalStyles'
import { Button, TextInput } from 'react-native-paper'

type LockScreenProps = {
  setMotDePasseInput: Dispatch<SetStateAction<string>>
  setToNewPassword: Dispatch<SetStateAction<boolean>>
  motDePasseInput: string
  handleGetAccess: Function
}

const LockScreen: FC<LockScreenProps> = ({setMotDePasseInput, handleGetAccess, motDePasseInput, }) => {
  return (
    <View style={[globalStyles.homeInputContainer, {alignItems:"center"}]}>
      <Text style={[globalStyles.label, {color:"black"}]} >
        Tapez le mot de passe :
      </Text>
      <TextInput
        style={[globalStyles.input, {width: "90%"}]}
        onChangeText={(text: string)=>setMotDePasseInput(text)}
        secureTextEntry={true}
      />
      <Button
        style={{backgroundColor:"red", width:"90%", height:50, marginVertical:20}}
        labelStyle={{fontSize:20, flex:1, color:"#fff", justifyContent:"center", padding:5}}
        onPress={()=>handleGetAccess(motDePasseInput)}
      >
        Valider mot de passe
      </Button>
    </View>
  )
}

export default LockScreen

const styles = StyleSheet.create({})