import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { CompanyDetail, InitialState } from '../types/types'

const initialState: InitialState = {
  company: null,
  isLoading: false,
  error: null
}

const companyDetailSlice = createSlice({
  name: 'companyDetail',
  initialState: initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<CompanyDetail>) => {
      state.company = action.payload
    },
    getError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const companyActions = companyDetailSlice.actions
export default companyDetailSlice.reducer
