import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ResultFormPage() {
  const [data, setData] = useState([]);
  
    // useEffect(() => {
    //   const data = localStorage.getItem('dataSurvey')
    //   setData(JSON.parse(data));

    // }, []);
  
  useEffect(() => {
    const loadSurveyData = () => {
      try {
        const savedData = localStorage.getItem('dataSurvey');
        if (savedData) {
          return JSON.parse(savedData);
        }
        return null;
      } catch (error) {
        console.error("Error loading survey data:", error);
        return null;
      }
    };

    const surveyData = loadSurveyData();
    if (surveyData) {
      setData(surveyData);
    } else {
      console.warn("No survey data found in localStorage");
      // Redirect ke form jika data tidak ada
      // window.location.href = '/survey-form';
    }
  }, []);
return (
    <div className='w-screen h-screen p-0 m-0 box-border overflow-hidden'>
      <div className='flex flex-col w-full h-full justify-start items-center mx-auto p-8 gap-6 bg-slate-00'>
      <div className='bg-slate-700 w-200 text-center p-8 rounded rounded-bl-4xl rounded-tr-4xl text-slate-100  text-3xl gap-2'>Result Form Survey Rokok</div>
      <table className='w-200 border border-slate-500'>
      <thead>
        <tr>
          <th className='p-2 border border-slate-500 bg-slate-200'>Nama</th>
          <th className='p-2 border border-slate-500 bg-slate-200'>Umur</th>
          <th className='p-2 border border-slate-500 bg-slate-200'>Jenis Kelamin</th>
          <th className='p-2 border border-slate-500 bg-slate-200'>Perokok</th>
          <th className='p-2 border border-slate-500 bg-slate-200'>Rokok</th>
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