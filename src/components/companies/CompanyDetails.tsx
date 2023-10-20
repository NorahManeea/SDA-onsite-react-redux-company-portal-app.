import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store'
import axios from 'axios'
import { companyActions } from '../../redux/companyDetailsSlice'
import { CircularProgress } from '@mui/material'

export default function CompanyDetails() {
  const company = useSelector((state: RootState) => state.companyDetail.company)
  const {isLoading, error} = useSelector((state: RootState) => state.companyDetail)

  const { id } = useParams()

  const dispatch = useDispatch<AppDispatch>()

  const url = `https://api.github.com/orgs/${id}`
  function fetchData() {
    axios
      .get(url)
      .then((response) => dispatch(companyActions.fetchData(response.data)))
      .catch((error) => dispatch(companyActions.getError(error.message)))
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <CircularProgress />
  }
  if (error) {
    return <div>Error: {error}</div>
  }
  return (
    <div>
      <p>ID: {company?.id}</p>
      <p>Node Id: {company?.node_id}</p>
      <p>
        URL: <a href={company?.url}>{company?.url}</a>
      </p>
      <p>Created at: {company?.created_at}</p>
      <p>Updated at: {company?.updated_at}</p>
      <p>Type: {company?.type}</p>
    </div>
  )
}
