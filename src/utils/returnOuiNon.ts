export const returnOuiNon = (statement: boolean): string=>{
  if(statement===true){
    return "OUI"
  } 
  if(statement===false){
    return "NON"
  }
  return "Pas de réponse"
}