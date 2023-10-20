import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store'
import { companyActions } from '../../redux/companySlice'

const SortCompany = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(companyActions.sortCompanies(event.target.value))
  }
  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select name="sort" id="sort" onChange={handleOptionChange}>
        <option value="id" defaultValue="id">
          ID
        </option>
        <option value="login">Login</option>
      </select>
    </div>
  )
}
export default SortCompany
