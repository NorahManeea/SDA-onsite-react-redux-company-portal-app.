import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Companies, CompanyInitialState } from '../types/types'

const initialState: CompanyInitialState = {
  companies: [],
  isLoading: false,
  error: null,
  searchQuery: '',
  filteredCompanies: []
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
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
      state.filteredCompanies = state.companies.filter((company) =>
        company.login.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    },
    filterCompanies: (state) => {
      const filtered = state.companies.filter((company) =>
        company.login.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
      state.filteredCompanies = filtered
    },
    sortCompanies: (state) => {
      state.companies.sort((a, b) => a.login.localeCompare(b.login))
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
