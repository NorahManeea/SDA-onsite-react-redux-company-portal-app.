import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { companyActions } from '../../redux/companySlice'
import { RootState } from '../../store'
import { CircularProgress } from '@mui/material'

export default function Companies() {
  const { companies, isLoading, error } = useSelector((state: RootState) => state.company)

  const dispatch = useDispatch()
  const url = 'https://api.github.com/organizations'
  function fetchData() {
    axios
      .get(url)
      .then((response) => dispatch(companyActions.fetchData(response.data)))
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetchData()
  })
  if (companies.length === 0 || isLoading) {
    return <CircularProgress />
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <div>
      {companies.map((company) => (
        <div key={company.id}>
          <img src={company.avatar_url} alt={company.login} />
          <p>{company.login.toUpperCase()}</p>
        </div>
      ))}
    </div>
  )
}
