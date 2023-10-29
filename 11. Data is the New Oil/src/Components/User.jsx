import React, { useEffect } from 'react'

function User() {
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log('Namaste Vivek from Functional component')
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    },[])
  return (
    <div className='user-card'>
        <h2>Name : Vivek</h2>
        <h3> Location : Ghaziabad </h3>
        <h4>Contact : vivek.9718470@gmail.com </h4>
    </div>
  )
}

export default User
