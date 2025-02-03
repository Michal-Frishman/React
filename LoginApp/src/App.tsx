import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './components/router'
import { Provider } from 'react-redux'
import store from './components/recipes/RecipesStore'
import { createContext, Dispatch, useReducer } from 'react'
import { UserType } from './Types/UserType'
type partUser = Partial<UserType>;
type action = {
  type: 'DELETE' | 'CREATE' | 'UPDATE',
  data: partUser
}
//check this!!!!!!!! ????אותו דבר עדכון/הוספה 
const userReducer = (state: UserType, action: action): UserType => {
  switch (action.type) {
    case 'CREATE':
      return { ...state, ...action.data }
    case 'UPDATE':
      return { ...state, ...action.data }
    default:
      return state
  }
}
export const userContext = createContext<[UserType, Dispatch<action>]>([{} as UserType, () => { }]);

function App() {
  const [user, dispatch] = useReducer(userReducer, {} as UserType);
  return (
    <>
        <userContext.Provider value={[user, dispatch]}>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </userContext.Provider>
    </>
  )
}

export default App
