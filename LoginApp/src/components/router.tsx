import { createBrowserRouter, Outlet } from 'react-router'
import HomePage from './HomePage'
import NavBar from './NavBar'
import About from './About'
export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <NavBar /> <Outlet />
            </>
        ),
        children: [
            { path: '', element: <HomePage /> },
            { path: 'about', element: <About /> }
        ]
    }
])