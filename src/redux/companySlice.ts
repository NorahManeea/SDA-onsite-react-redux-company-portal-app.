import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Companies, CompanyInitialState } from '../types/types'

const initialState: CompanyInitialState = {
  companies: [],
  isLoading: false,
  error: null,
  searchText: " "
}
// export const fetchAllCompanies = createAsyncThunk("companies/fetchallcompanies", async()=>{
//     const response = await fetch("https://api.github.com/organizations");
//     const data = await response.json();
//     return data;
// })

const companySlice = createSlice({
  name: 'company',
  initialState: initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<Companies[]>) => {
      state.companies = action.payload
    },
    getError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    searchCompany: (state,action: PayloadAction<string>)=>{
      state.searchText = action.payload
    },
    sortCompanies: (state, action: PayloadAction<string>) => {
      const sortCriteria = action.payload;
      if(sortCriteria === 'login'){
        state.companies.sort((a,b)=> a.login.localeCompare(b.login))
      }else if(sortCriteria === 'id'){
        state.companies.sort((a,b)=> b.id - a.id)
      }
      console.log(sortCriteria)
    }
  }
  // extraReducers: (builder)=>{
  //      builder.addCase(fetchAllCompanies.pending, (state)=>{
  //         state.isLoading = true
  //      })
  //      builder.addCase(fetchAllCompanies.fulfilled, (state,action)=>{
  //         state.isLoading = false
  //         state.companies = action.payload
  //      })
  //      builder.addCase(fetchAllCompanies.rejected, (state,action)=> {
  //         state.isLoading = false
  //         state.error = action.error.message || "Failed to fetch Data"
  //      })
  // }
})

export const companyActions = companySlice.actions
export default companySlice.reducer
