import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

function About() {
    const [searchparams,setSearchParams] = useSearchParams()
    // useEffect(() => {
    //     const queryParams = new URLSearchParams(window.location.search)
        
    //     const query = queryParams.get('text');
    //     queryParams.set("city", "New York");
    //     const data = queryParams.get('city');
    //     console.log(queryParams,query,data)
    //     window.history.replaceState({}, '', `?${queryParams.toString()}`);
    // },[])
    console.log(searchparams,'lkfadskldsalkfdjds',searchparams.get('text'))
  return (
    <div>
      <h1 onClick={() => setSearchParams({text:'heljfaskljflkasjflksa'})}>About</h1>
      <h2> This is I am learning React in more Depth, So that whenever I go in interview, I can explain all these in more good way.</h2>
    </div>
  )
}

export default About
