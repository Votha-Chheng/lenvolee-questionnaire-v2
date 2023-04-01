import { createSlice } from "@reduxjs/toolkit"

type Password = {
  password?: string
}

const initialState: Password = {
  password: undefined
}

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    resetPassword:(state)=> {
      state.password = undefined
    },
    setPassword: (state, action)=> {
      state.password = action.payload
    }
  }
})

export const {resetPassword, setPassword} = passwordSlice.actions

export default passwordSlice.reducer