import { FicheReponses } from "../classes/FicheReponses"
import { ListeReponsesAdulte } from "../classes/ListeReponsesAdultes"
import { ListeResponsesEnfant } from "../classes/ListeResponsesEnfant"
import { HomeScreenProps } from "../screens/homeScreen/HomeScreen"

export const handleFicheReponseInListePatients = (isAdult: boolean, listeFichesPatient: FicheReponses[], navig: HomeScreenProps, objList: ListeReponsesAdulte|ListeResponsesEnfant, dispatcher: Function, setter: Function)=> {

  let temp: FicheReponses[] = []

  const values: FicheReponses = {isAdult, id: +Date.now(), ...objList}

  if(values["nom"] === undefined) {
    values["nom"] = "Nom indéfini"
  } 
  if(values["prenom"] === undefined){
    values["prenom"] = "Prénom indéfini"
  }
  if(values["dateRdv"] === undefined){
    values["dateRdv"] = "date indéfini"
  } 

  if(listeFichesPatient === temp){
    temp = [values]
  } else {
    temp = [...listeFichesPatient, values]
  }
  
  dispatcher(setter(temp))

  navig.navigate("Merci")
}