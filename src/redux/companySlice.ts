import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CompanyInitialState } from "../types/types";


const initialState: CompanyInitialState = {
    companies: [],
    isLoading: false,
    error: null
}
// export const fetchAllCompanies = createAsyncThunk("companies/fetchallcompanies", async()=>{
//     const response = await fetch("https://api.github.com/organizations");
//     const data = await response.json();
//     return data;
// })

const companySlice = createSlice({
    name: "company",
    initialState: initialState,
    reducers:{
        fetchData: (state,action)=>{
            state.companies = action.payload
        },
        
    },
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

export const companyActions = companySlice.actions;
export default companySlice.reducer;