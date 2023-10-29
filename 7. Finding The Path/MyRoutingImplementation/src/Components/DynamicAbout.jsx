import React from 'react'
import { useSearchParams,useParams } from 'react-router-dom'
function DynamicAbout(props) {
    const {id} = useParams();
  return (
    <div>
      <h1>Dynamic Routes {id} sjkl</h1>
    </div>
  )
}

export default DynamicAbout
