import { createBrowserRouter } from 'react-router'
import AppLayout from './AppLayout'
import RecipesList from './recipes/RecipesList'
import ShowRecipe from './recipes/ShowRecipe'

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
                <AppLayout />
        ),
        children: [
            {
                path: 'recipes',
                 element: 
                    <RecipesList /> 
               
   
            },{
               
                    path:'recipes/:id',element:<ShowRecipe />
             
            }
        ]
    }
])