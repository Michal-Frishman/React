import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './components/router'
import { Provider } from 'react-redux'
import RecipesList from './components/recipes/RecipesList'
import store from './Store'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
