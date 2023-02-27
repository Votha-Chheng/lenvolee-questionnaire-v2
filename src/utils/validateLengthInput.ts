export const onValidateLengthInput = (lengthMin: number, dispatch: Function, cb: Function, text: string) : void =>{

  if(text.length>lengthMin){
    dispatch(cb(text))
  } else {
    dispatch(cb(undefined))
  }
}

export const onValidateLengthInPutForObject = (text: string, lengthMin: number, dispatch: Function, cb: Function, obj: any, value: string): void =>{
  if(text.length>lengthMin && obj !== undefined){
    dispatch(cb({...obj, [value]: text.trim()}))
  } else {
    dispatch(cb({...obj, [value]: undefined}))
  }
}
