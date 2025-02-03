import { createBrowserRouter } from 'react-router'
import AppLayout from './AppLayout'
import RecipesList from './recipes/RecipesList'
import ShowRecipe from './recipes/ShowRecipe'
import HomePage from './HomePage';
import AddRecipe from './recipes/AddRecipe';
import About from './About';

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
            { path: "home", element: <HomePage /> },
            { index: true, element: <HomePage /> },
            {
                path: 'addRecipe',
                element: <AddRecipe />
            },
            {path:'about',
                element: <About/>
            }
        ]
    }
]);
