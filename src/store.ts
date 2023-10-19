import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import companyReducer from './redux/companySlice'
import companyDetailReducer from './redux/companyDetailsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    company: companyReducer,
    companyDetail: companyDetailReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
