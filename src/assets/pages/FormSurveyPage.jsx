import React from 'react'
import { Link } from 'react-router-dom'
import Input from './../components/Input';
import Option from '../components/Option';
import { useForm } from "react-hook-form"

function FormSurveyPage() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = React.useState([]);
  const form = document.querySelector('form')

  const onSubmit = (formData) => {
    setData((data) => [...data, formData]);
    form.reset()
  };
  
  localStorage.setItem('dataSurvey', JSON.stringify(data))
  
  return (
    <div className='w-screen h-screen p-0 m-0 box-border overflow-hidden'>
      <div className='flex flex-col w-full h-full justify-start items-center mx-auto p-8 gap-6'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-slate-800 w-200 text-center p-8 rounded text-amber-50  text-3xl gap-2' >Form Survey Rokok</div>
        <div className='flex flex-col w-200 h-33 bg-slate-200 p-6 gap-2 rounded'>
        <Input {...register("name")} type="Text" label="Siapa Nama Anda?" name="name" id="name" placeholder="Masukkan Nama Anda"/>
        </div>
        <div className='flex flex-col w-200 h-33 bg-slate-200 p-6 gap-2 rounded'>
        <Input {...register("age")} type="Text" label="Berapa Umur Anda?" name="age" id="age" placeholder="Masukkan Umur Anda"/>
        </div>
        <div className="flex flex-col w-200 h-25 bg-slate-200 p-6 gap-2 rounded">
        <Option {...register("gender")}
          type="radio"
          label="Apa Jenis Kelamin Anda?"
          name="gender"
          id="gender"
          value={["Laki-laki", "Perempuan"]}
        />
        </div>
        <div className="flex flex-col w-200 h-25 bg-slate-200 p-6 gap-2 rounded">
          <Option {...register("smoker")}
            type="radio"
            label="Apa anda perokok?"
            name="smoker"
            id="smoker"
            value={["Ya", "Tidak"]}
          />
         </div>
        <div className='flex flex-col w-200 h-49 bg-slate-200 p-6 rounded gap-2'>
        <Option {...register("cigarette")} className="gap-2"
          type="checkbox"
          label="Jika Anda perokok, rokok apa yang pernah Anda coba?"
          name="cigarette"
          id="cigarette"
          value={["Gudang Garam Filter", "Lucky Strike", "Marlboro", "Esse"]}
        />
        </div>
        
        <div className='flex flex-col w-200 h-8 rounded'>
        <button className='py-2 px-4 outline-0 font-sans border bg-slate-800 text-white rounded cursor-pointer'>Submit</button>
        </div>  
      </form>
      <Link to="/result" className="text-slate-800font-medium text-xl uppercase">
          Lihat Hasil Survey
      </Link>
      </div>
    </div>
  )
}

export default FormSurveyPage