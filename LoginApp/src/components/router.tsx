import { createBrowserRouter } from 'react-router'
import About from './About'
import HomePage from './user/HomePage'
import AppLayout from './AppLayout'
import RecipesList from './recipes/RecipesList'
import { Provider } from 'react-redux'
import store from '../Store'
export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <AppLayout />
            </>
        ),
        children: [
            {
                path: 'recipes', element: <Provider store={store}>
                    <RecipesList />
                </Provider>   
            }
        ]
    }
])