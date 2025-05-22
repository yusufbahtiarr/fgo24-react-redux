import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import FormSurveyPage from "./assets/pages/FormSurveyPage";
import ResultFormPage from "./assets/pages/ResultFormPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormSurveyPage />,
  },
  {
    path: "/result",
    element: <ResultFormPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
