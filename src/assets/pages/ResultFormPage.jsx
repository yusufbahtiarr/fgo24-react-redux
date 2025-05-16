import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ResultFormPage() {
  const [data, setData] = useState([]);
  
    useEffect(() => {
      const data = localStorage.getItem('dataSurvey')
      setData(JSON.parse(data));

    }, []);
  
return (
    <div className='w-screen h-screen p-0 m-0 box-border overflow-hidden'>
      <div className='flex flex-col w-full h-full justify-start items-center mx-auto p-8 gap-6 bg-slate-100'>
      <div className='bg-slate-800 w-200 text-center p-8 rounded text-amber-50  text-3xl gap-2'>Result Form</div>
      <table className='w-200 border border-slate-500'>
      <thead>
        <tr>
          <th className='p-2 border border-slate-500'>Nama</th>
          <th className='p-2 border border-slate-500'>Umur</th>
          <th className='p-2 border border-slate-500'>Jenis Kelamin</th>
          <th className='p-2 border border-slate-500'>Perokok</th>
          <th className='p-2 border border-slate-500'>Rokok</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => 
        <tr key={index}>
          <td className='p-2 border border-slate-500'>{item.name}</td>
          <td className='p-2 border border-slate-500'>{item.age}</td>
          <td className='p-2 border border-slate-500'>{item.gender}</td>
          <td className='p-2 border border-slate-500'>{item.smoker}</td>
          <td className='p-2 border border-slate-500'>{Array.isArray(item.cigarette) && item.cigarette?.join(", ")}</td>
        </tr>
        )}
      </tbody>
    </table>
      <Link to="/" className="text-slate-800font-medium text-xl uppercase">
        Form Survey
      </Link>
      </div>
      </div>
  )
}

export default ResultFormPage