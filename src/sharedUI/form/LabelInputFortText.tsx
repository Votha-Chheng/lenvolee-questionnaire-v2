import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import Label from './Label'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { globalStyles } from '../../utils/globalStyles'
import { onValidateLengthInput } from '../../utils/validateLengthInput'


export type LabelInputForTextProps = {
  statement: any
  question: string 
  reducerFromStore: Function
  flexRow: boolean
  minLengthForInput: number
  width?: number
}

const LabelInputForText:FC<LabelInputForTextProps> = ({statement, question, reducerFromStore, flexRow, minLengthForInput, width=300}) => {

  const dispatch = useDispatch()

  return (
    <View style={flexRow === true ? [globalStyles.flexRow, {alignItems:"flex-start"}]: {marginBottom:20}}>
      <Label
        statement={statement}
        question={question}
      />
      <TextInput 
        onChangeText={(name)=>onValidateLengthInput(minLengthForInput, dispatch, reducerFromStore, name)}
        style={[globalStyles.input, {borderColor:`${statement===undefined? "red":"green"}`, backgroundColor:"whitesmoke", width}]}  
      />
    </View>
  )
}

export default LabelInputForText

const styles = StyleSheet.create({})