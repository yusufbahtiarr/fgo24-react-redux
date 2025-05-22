import { Link } from "react-router-dom";
import Input from "./../components/Input";
import Option from "../components/Option";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Card from "../components/Card";
import { useDispatch } from "react-redux";
import { addSurvey } from "../../redux/reducers/survey";

const validation = yup.object({
  name: yup
    .string()
    .min(3, "Nama minimal 3 karakter!")
    .required("Nama Harus Diisi !"),
  age: yup
    .number()
    .typeError("Input harus angka")
    .min(17, "Anda harus berusia minimal 17 tahun")
    .required("Umur harus diisi"),
  gender: yup
    .mixed()
    .oneOf(["Laki-laki", "Perempuan"])
    .required("Harus dipilih salah satunya!"),
  smoker: yup
    .mixed()
    .oneOf(["Ya", "Tidak"])
    .required("Harus dipilih salah satunya!"),
  cigars: yup.array().notRequired(),
});

function FormSurveyPage() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });
  // const [data, setData] = React.useState([]);

  // useEffect(() => {
  //   const savedData = localStorage.getItem("dataSurvey");
  //   if (savedData) {
  //     setData(JSON.parse(savedData));
  //   }
  // }, []);

  function saveData(value) {
    dispatch(addSurvey(value));
    console.log(value);
    reset();
  }

  return (
    <div className="w-screen h-screen p-0 m-0 box-border overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-center mx-auto p-8 gap-6 bg-slate-400">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(saveData)}>
          <div className="relative bg-slate-700 w-200 text-center z-10 p-8 rounded rounded-bl-4xl rounded-tr-4xl text-amber-50  text-3xl gap-2  overflow-hidden">
            <div className="absolute bg-slate-900 w-198 h-3 top-0 left-0 z-[-1] rounded rounded-tr-full"></div>
            Form Survey Rokok
            <p className="text-center text-base text-gray-100 mt-4 px-4 max-w-2xl mx-auto">
              Silakan isi form berikut ini dengan lengkap dan jujur. Informasi
              yang Anda berikan akan digunakan untuk keperluan survei mengenai
              kebiasaan merokok di masyarakat.
            </p>
          </div>

          <Card>
            <div className="absolute bg-slate-900 w-198 h-3 top-0 left-0 z-[-1] rounded rounded-tr-full">
              asads
            </div>
            <Input
              {...register("name")}
              type="Text"
              label="Siapa Nama Anda?"
              name="name"
              id="name"
              placeholder="Masukkan Nama Anda"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </Card>
          <Card>
            <Input
              {...register("age")}
              type="number"
              label="Berapa Umur Anda?"
              name="age"
              id="age"
              placeholder="Masukkan Umur Anda"
            />
            {errors.age && (
              <p className="text-red-500 text-m">{errors.age.message}</p>
            )}
          </Card>
          <Card>
            <Option
              {...register("gender")}
              type="radio"
              label="Apa Jenis Kelamin Anda?"
              name="gender"
              id="gender"
              value={["Laki-laki", "Perempuan"]}
            />
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </Card>
          <Card>
            <Option
              {...register("smoker")}
              type="radio"
              label="Apa Anda Perokok?"
              name="smoker"
              id="smoker"
              value={["Ya", "Tidak"]}
            />
            {errors.smoker && (
              <p className="text-red-500 text-sm">{errors.smoker.message}</p>
            )}
          </Card>
          <Card>
            <Option
              {...register("cigars")}
              className="gap-2 text-7xl"
              type="checkbox"
              label="Jika Anda perokok, rokok apa yang pernah Anda coba?"
              name="cigars"
              id="cigars"
              value={[
                "Gudang Garam Filter",
                "Lucky Strike",
                "Marlboro",
                "Esse",
              ]}
            />
          </Card>

          <Card className="flex flex-row justify-between items-center">
            <button className="text-xl py-2 px-8 outline-0 font-sans border bg-slate-800 text-white rounded rounded-bl-2xl rounded-tr-2xl cursor-pointer hover:bg-slate-700">
              Submit
            </button>
            <Link
              to="/result"
              className="text-l text-slate-800 text-lg font-semibold uppercase hover:text-slate-700"
            >
              Lihat Hasil Survey
            </Link>
          </Card>
        </form>
      </div>
    </div>
  );
}

export default FormSurveyPage;
