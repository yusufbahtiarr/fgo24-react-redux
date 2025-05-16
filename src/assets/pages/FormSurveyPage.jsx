import React ,{ useEffect} from 'react'
import { Link } from 'react-router-dom'
import Input from './../components/Input';
import Option from '../components/Option';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validation = yup.object({
  name: yup.string().min(3, "Nama minimal 3 karakter!").required("Nama Harus Diisi !"),
  age: yup.number().min(17, "Anda harus berusia minimal 17 tahun").required("Umur harus diisi"),
  gender: yup.mixed().oneOf( ['Laki-laki', 'Perempuan']).required("Harus dipilih salah satunya!"),
  smoker: yup.mixed().oneOf(['Ya', 'Tidak']).required("Harus dipilih salah satunya!"),
  cigarette: yup.array().notRequired()
})

function FormSurveyPage() {
  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: yupResolver(validation)
  })
  const [data, setData] = React.useState([]);
  
  useEffect(() => {
  const savedData = localStorage.getItem('dataSurvey');
  if (savedData) {
      setData(JSON.parse(savedData));
  }
}, []);
  
  const onSubmit = (formData) => {
    let sanitization = -1
    if (formData.age < 0){
      sanitization *= formData.age
    }else{
      sanitization = formData.age
    }
    formData.age = sanitization
    const newData = [...data, formData];
    setData(newData);
    localStorage.setItem('dataSurvey', JSON.stringify(newData));
    reset();
  };
  
  
  return (
    <div className='w-screen h-screen p-0 m-0 box-border overflow-hidden'>
      <div className='flex flex-col w-full h-full justify-start items-center mx-auto p-8 gap-6'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
        <div className='bg-slate-800 w-200 text-center p-8 rounded text-amber-50  text-3xl gap-2' >Form Survey Rokok</div>
        <div className='flex flex-col w-200 h-33 bg-slate-200 p-6 gap-2 rounded'>
          <Input {...register("name")} type="Text" label="Siapa Nama Anda?" name="name" id="name" placeholder="Masukkan Nama Anda"/>
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
        <div className='flex flex-col w-200 h-33 bg-slate-200 p-6 gap-2 rounded'>
          <Input {...register("age")} type="number" label="Berapa Umur Anda?" name="age" id="age" placeholder="Masukkan Umur Anda"/>
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>
        <div className="flex flex-col w-200 h-25 bg-slate-200 p-6 gap-2 rounded">
          <Option {...register("gender")}
            type="radio"
            label="Apa Jenis Kelamin Anda?"
            name="gender"
            id="gender"
            value={["Laki-laki", "Perempuan"]}
          />
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>
        <div className="flex flex-col w-200 h-25 bg-slate-200 p-6 gap-2 rounded">
          <Option {...register("smoker")}
            type="radio"
            label="Apa anda perokok?"
            name="smoker"
            id="smoker"
            value={["Ya", "Tidak"]}
          />
           {errors.smoker && <p className="text-red-500 text-sm">{errors.smoker.message}</p>}
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