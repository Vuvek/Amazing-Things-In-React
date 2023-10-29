import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Protected({children}) {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        if (!localStorage.getItem('login')) {
            navigate('/login')
        }
    },[])
  return (
    <div>
      {children}
    </div>
  )
}

export default Protected
