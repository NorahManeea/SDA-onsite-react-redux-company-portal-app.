import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { companyActions } from '../../redux/companySlice'
import { AppDispatch, RootState } from '../../store'
import {
  CircularProgress,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container
} from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'

export default function Companies() {
  const { companies, isLoading, error, searchQuery, filteredCompanies } = useSelector(
    (state: RootState) => state.company
  )

  const dispatch = useDispatch<AppDispatch>()

  const url = 'https://api.github.com/organizations'
  function fetchData() {
    axios
      .get(url)
      .then((response) => dispatch(companyActions.fetchData(response.data)))
      .catch((error) => dispatch(companyActions.getError(error.message)))
  }
  const handleSort = () => {
    dispatch(companyActions.sortCompanies())
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
    <Container>
      <SearchBar />
      <Button onClick={handleSort} variant="contained">
        Sort Companies
      </Button>
      <Grid container spacing={4}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <Card sx={{ height: '100%', padding: '5px' }}>
              <CardMedia
                component="img"
                src={company.avatar_url}
                alt={company.login}
                height="350"
              />
              <CardContent>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                  {company.login.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {company.description ?? '-'}
                </Typography>
              </CardContent>
              <Button component={Link} to={`/${company.id}`} variant="contained">
                Company Info
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
