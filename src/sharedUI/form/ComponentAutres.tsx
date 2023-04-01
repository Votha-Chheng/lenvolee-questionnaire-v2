import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, useWindowDimensions} from 'react-native';
import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';
import { globalStyles } from '../../utils/globalStyles';


export type ComponentAutresProps = {
  stateArray : any[] | undefined
  reducerFromStore: Function
  extraItem: string
  placeHolder: string
  width?: number
  obligatoire?: boolean
}

const ComponentAutres: FC<ComponentAutresProps> = ({stateArray, reducerFromStore, extraItem, placeHolder, obligatoire = true, width=350}: ComponentAutresProps)=>{

  const [inputValue, setInputValue] = useState("")
  const [showNewValues, setShowNewValues] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [deleteMode, setDeleteMode] = useState(false)
  const [extra, setExtra] = useState<string[]>([])

  const dispatch = useDispatch()
  const window = useWindowDimensions()

  useEffect(()=>{
    extra.length>0 ? setShowDelete(true) : setShowDelete(false)
  }, [extra])

  useEffect(()=>{
    extra.length === 0 && setDeleteMode(false)
  }, [extra])

  const validateNewElement = ()=> {
    setExtra([...extra, inputValue.trim()])
    let newArrayExtraMaladies: string[] = []

    if(stateArray === undefined){
      newArrayExtraMaladies = [inputValue.trim()]
    } else {
      newArrayExtraMaladies = [...stateArray, inputValue.trim()]
    }
    
    dispatch(reducerFromStore(newArrayExtraMaladies))
    setInputValue("")
    setShowNewValues(false)
  }

  const deleteDisease = (event: any)=>{
    let temp = extra.filter((disease) => disease !== (event._dispatchInstances.memoizedProps.children[0].props.children))
    let tempState = stateArray?.filter((disease) => disease !== (event._dispatchInstances.memoizedProps.children[0].props.children))

    if(tempState !== undefined && tempState.length<1){
      if(obligatoire){
        dispatch(reducerFromStore(undefined))

      } else {
        dispatch(reducerFromStore([]))
      }
      
    } else {
      dispatch(reducerFromStore(tempState))

    }
    setExtra(temp)
  }

  return (
    <ScrollView style={[globalStyles.container, {marginBottom:15}]}>
      <View>
        <Text style={[globalStyles.label, {color:`${stateArray===undefined ? "red":"black"}`}]}>
          &#8227; {extraItem} (ajouter un seul élément à la fois puis valider) :
        </Text>
        {
          deleteMode && 
          <Text style={{marginHorizontal:5, marginTop:0, marginBottom:10}}>
            (Appuyer sur un élément en rouge pour le supprimer de la liste.)
          </Text>
        }
        <View style={[globalStyles.flexRow, {flexWrap:"wrap", marginBottom:20}]}> 
          {
            extra.length>0 ? 
            extra.map((disease: string, index)=> (
              <TouchableOpacity 
                key={index}
                style={
                  deleteMode 
                  ? 
                  [styles.deletable, { height:50, padding:5, marginLeft:10, borderRadius:5}] 
                  : 
                  [styles.noDelete, { height:50, padding:5, marginLeft:10, marginBottom:2.5, borderRadius:5}]
                }
                onPress={(event)=> deleteMode && deleteDisease(event)}
              >
                <Text style={{fontSize:20, color: `${deleteMode ? "white" : "purple"}`, textAlign:"center", justifyContent:"center"}}>
                  {disease} 
                </Text>
              </TouchableOpacity>
            ))    
            : null
          }
        </View>
      </View>
      
      <View style={globalStyles.flexRow}>
        {
          showNewValues ?
          <View style={{flexDirection:window.width>500? 'row':"column"}}>
            <TextInput
              style={[globalStyles.input, {width, height:50, marginRight:10}]}  
              onChangeText={(text)=>setInputValue(text.trim())}
              placeholder={placeHolder}
              placeholderTextColor="grey"
            />
            <View style={{flexDirection:'row', marginTop: window.width>500 ? 0 : 10}}>
              <Button
                mode="contained"
                buttonColor="orange"
                onPress={()=>setShowNewValues(false)}
                style={{marginHorizontal:5}}
              >
                Annuler
              </Button>
              <Button
                mode="contained"
                buttonColor={inputValue.length<1? "#e5e2de" :"green"}
                labelStyle={{color:  "whitesmoke"}}
                onPress={()=>validateNewElement()}
                style={{marginHorizontal:5}}
              >
                Valider
              </Button>
            </View>
            
          </View>
          :
          <View style={[globalStyles.flexRow, {marginBottom:0}]}>
            <Button 
              mode='contained'
              buttonColor="#2086EB"
              onPress={()=>setShowNewValues(true)}
              disabled={deleteMode}
              style={{marginHorizontal:5}}
            >
              AJOUTER
            </Button>
            {
              showDelete 
              ?
              <Button
                buttonColor="#f79c09"
                onPress={()=>setDeleteMode(prev => !prev)}
                mode="contained"
                style={{marginHorizontal:5}}
              >
                {deleteMode ? "FIN SUPPRESSION":"SUPPRIMER"}
              </Button>
              
              :
              null
            }
          </View>  
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  extraDiseases :{
    flexDirection:"row",
    flexWrap:"wrap"
  },
  deletable : {
    backgroundColor:"red",
  },
  noDelete: {
    backgroundColor:"#fff",
    borderWidth: 2,
    borderColor: "purple"
  }
});

export default ComponentAutres