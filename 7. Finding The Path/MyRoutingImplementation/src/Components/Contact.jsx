import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  const [data,setData] = useState({name : 'vivek' , class:'12',roll:23})
  return (
    <div>
      <h1>Contact page is here</h1>
      <Link to={'company'} state={{data : data}}>Company</Link>
      <Link to={'chanel'}>Chanel</Link>
      <Link to={'other'}>Other</Link>
      <Outlet />
    </div>
  )
}

export default Contact
