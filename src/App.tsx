import { useDispatch, useSelector } from 'react-redux'
import { Button, Box, Grid, Typography } from '@mui/material'

import { decrement, increment } from './features/counterSlice'
import { RootState } from './store'
import './App.css'
import Companies from './components/companies/Companies'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)

  return (
    <div className="App">
      <h1>Companies Portal App</h1>
      <Companies/>
     
    </div>
  )
}

export default App