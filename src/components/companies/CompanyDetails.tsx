import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store'

export default function CompanyDetails() {
  const  companies  = useSelector((state: RootState) => state.company.companies);
  const { id } = useParams();
    const company = companies.find((p) => p.id === Number(id))

  return <div>
<p>{company?.id}</p>

  </div>
}
