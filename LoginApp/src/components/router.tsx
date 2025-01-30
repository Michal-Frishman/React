import { createBrowserRouter } from 'react-router'
import AppLayout from './AppLayout'
import RecipesList from './recipes/RecipesList'
import ShowRecipe from './recipes/ShowRecipe'
import HomePage from './HomePage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: 'recipes',
                element: <RecipesList />,
                children: [
                    {
                        path: ':id',
                        element: <ShowRecipe />
                    }
                ]
            },
           { path:'home',
            element:<HomePage/>
        }
        ]
    }
]);
