export const addRadioItem = (isChecked: boolean, nameAllergie: string, stateArray: string[] | undefined, dispatcher: Function, reducerFromStore: Function, shouldeBeUndefinedIfNull?: boolean)=>{

  if(stateArray===undefined && isChecked){
    dispatcher(reducerFromStore([nameAllergie]))
        
  } else if(stateArray !== undefined) {

    if(isChecked){
      let tempState = [...stateArray, nameAllergie]
      dispatcher(reducerFromStore(tempState))

    } else if(!isChecked){
      let temp = stateArray.filter(medic=> medic !== nameAllergie)
      
      if(temp.length<1 && shouldeBeUndefinedIfNull === true){
        dispatcher(reducerFromStore(undefined))

      } else {
        dispatcher(reducerFromStore(temp))
      }
    }
  }  
}