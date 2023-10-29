import React from 'react'
import { useLocation } from 'react-router-dom'

function Company() {
  const locationData = useLocation()
  console.log(locationData)
  return (
    <div>
      <h1>Hello Company is here</h1>
      <p>Hello i am company is here</p>
    </div>
  )
}

export default Company
