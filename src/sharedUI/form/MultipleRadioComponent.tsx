import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { RadioButton } from 'react-native-paper';
import { globalStyles } from '../../utils/globalStyles';

export type MultipleRadioComponentProps = {
  choix : string
  valueState : string | undefined
  dispatcher : Function 
  reducerFromStore : Function
}

const MultipleRadioComponent:FC<MultipleRadioComponentProps> = ({choix, valueState, dispatcher, reducerFromStore}: MultipleRadioComponentProps) => {
  return ( 
    <View style={[globalStyles.flexRow, {marginBottom:7.5, flexWrap:"nowrap", alignItems:"center"}]}>
      <RadioButton
        value={choix}
        status={valueState===undefined || !valueState? 'unchecked' : valueState===choix ? 'checked' : 'unchecked' }
        onPress={()=>dispatcher(reducerFromStore(choix))}
      />
      <Text 
        style={
          valueState===undefined || valueState !== choix 
          ? 
          {fontSize: 20, color:"grey", flexWrap:"wrap", width:"100%", paddingRight:10} 
          : 
          {fontSize: 20, color:"green", fontWeight:"bold", flexWrap:"wrap", width:"100%"}
        }
      >
        {choix}
      </Text>
    </View>
  )
};

export default MultipleRadioComponent;