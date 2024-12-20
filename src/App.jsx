import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [allimages, setallimages] = useState([])

  const clickhandler =async()=>{
    const response =await axios.get("https://picsum.photos/v2/list")
    setallimages(response.data)
    console.log(response.data);
  }


  return (<div className='p-4'>
    <button onClick={clickhandler} className='bg-emerald-400 px-3 py-2 rounded mb-10  '>Get Data</button>
    {
      allimages.map(function(elem){
        return <div className='flex items-center justify-between bg-slate-200 mb-3 p-5 shadow'>
          <img  className='h-72 object-center object-cover rounded shadow-2xl' src={elem.download_url}alt="" />
          <h1 className='text-2xl font-semibold'>{elem.author}</h1>
        </div>
      })
    }
  </div>
  )
}

export default App