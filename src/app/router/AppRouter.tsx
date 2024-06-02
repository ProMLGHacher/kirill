import Main from "@/pages/main/Main"
import { createBrowserRouter, Link, Navigate, RouterProvider } from "react-router-dom"
import { Route } from "./types";
import ProtectedRoute from "./ProtectedRoute";


const routes: Route[] = [
    {
        path: '/',
        element: <Main />,
        roles: ['Admin', 'Guest', 'User'],
    },
]

const router = createBrowserRouter([
    ...routes.map(e => {
        return {
            path: e.path,
            element: <ProtectedRoute roles={e.roles} element={e.element} />
        }
    }),
    {
        path: '/403',
        element: <>
            Нет прав
            <Link to={'/'}>на главную</Link>
        </>
    },
    {
        path: '*',
        element: <Navigate to={'/'} replace />
    }
])

export const AppRouter = () => {


    return (
        <RouterProvider router={router} />
    )
}
