
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import FormSurveyPage from './assets/pages/FormSurveyPage'
import ResultFormPage from './assets/pages/ResultFormPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormSurveyPage />
  },
  {
    path: "/result",
    element: <ResultFormPage />
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
