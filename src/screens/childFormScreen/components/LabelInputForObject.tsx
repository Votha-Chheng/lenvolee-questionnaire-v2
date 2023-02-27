import { View } from 'react-native'
import React, { FC } from 'react'
import { TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { globalStyles } from '../../../utils/globalStyles'
import Label from '../../../sharedUI/form/Label'
import { onValidateLengthInPutForObject } from '../../../utils/validateLengthInput'

export type LabelInputForObjectProps = {
  statement?: string|number
  question: string 
  reducerFromStore: Function
  obj: Object
  keyValue: string 
  flexRow: boolean
  width?: number
}

const LabelInputForObject:FC<LabelInputForObjectProps> = ({statement, question, reducerFromStore, obj, keyValue, flexRow, width=300}) => {

  const dispatch = useDispatch()

  return (
    <View style={flexRow === true ? [globalStyles.flexRow, {alignItems:"flex-start"}]: null}>
      <Label
        statement={statement}
        question={question}
      />
      <TextInput 
        onChangeText={(name)=>onValidateLengthInPutForObject(name, 0, dispatch, reducerFromStore, obj, keyValue)}
        style={[globalStyles.input, {borderColor:`${statement===undefined? "grey":"green"}`, width}]}  
      />
    </View>
  )
}

export default LabelInputForObject