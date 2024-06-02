import Main from "@/pages/main/Main"
import { createBrowserRouter, RouterProvider } from "react-router-dom"


const mainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main />
    },
    {
        path: '*',
        element: 'NOT FOUND'
    }
])

export const AppRouter = () => {
    return (
        <RouterProvider router={mainRouter} />
    )
}
