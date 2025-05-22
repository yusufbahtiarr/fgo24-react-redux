import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeSurvey } from "../../redux/reducers/survey";

function ResultFormPage() {
  const dispatch = useDispatch();
  const survey = useSelector((state) => state.survey.data);

  const handleRemove = (id) => {
    dispatch(removeSurvey(id));
    // console.log(id);
    // console.log(survey);
  };

  return (
    <div className="w-screen h-screen p-0 m-0 box-border overflow-hidden">
      <div className="flex flex-col w-full h-full justify-start items-center mx-auto p-8 gap-6 bg-slate-00">
        <div className="bg-slate-700 w-200 text-center p-8 rounded rounded-bl-4xl rounded-tr-4xl text-slate-100  text-3xl gap-2">
          Result Form Survey Rokok
        </div>
        <table className="w-200 border border-slate-500">
          <thead>
            <tr>
              <th className="p-2 border border-slate-500 bg-slate-200">Nama</th>
              <th className="p-2 border border-slate-500 bg-slate-200">Umur</th>
              <th className="p-2 border border-slate-500 bg-slate-200">
                Jenis Kelamin
              </th>
              <th className="p-2 border border-slate-500 bg-slate-200">
                Perokok
              </th>
              <th className="p-2 border border-slate-500 bg-slate-200">
                Rokok
              </th>
              <th className="p-2 border border-slate-500 bg-slate-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {survey.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border border-slate-500">{item.name}</td>
                <td className="p-2 border border-slate-500">{item.age}</td>
                <td className="p-2 border border-slate-500">{item.gender}</td>
                <td className="p-2 border border-slate-500">{item.smoker}</td>
                <td className="p-2 border border-slate-500">
                  {Array.isArray(item.cigars) && item.cigars?.join(", ")}
                </td>
                <td className="p-2 border border-slate-500">
                  <button
                    type="button"
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                    className="bg-amber-600 py-2 px-4 rounded text-xl text-white "
                  >
                    Remove Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between w-200 items-center">
          <Link to="/" className="text-slate-800 font-medium text-xl uppercase">
            Form Survey
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResultFormPage;
