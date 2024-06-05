import { createBrowserRouter, Link, Navigate, Outlet, RouterProvider } from "react-router-dom"
import { Route } from "./types";
import ProtectedRoute from "./ProtectedRoute";
import HeaderLayout from "../layouts/HeaderLayout/HeaderLayout";
import { Main } from "@/pages/main";
import { Login } from "@/pages/Login";
import { Registration } from "@/pages/Register";
import { Profile } from "@/pages/profile";
import { ProfileNavigationLayout } from "../layouts/ProfileNavigationLayout/ProfileNavigationLayout";


const routes: Route[] = [
    {
        path: '/',
        element: <HeaderLayout />,
        roles: ['Admin', 'Guest', 'User'],
        childrens: [
            {
                path: '/',
                element: <Main />,
                roles: ["Guest", "Admin", "User"]
            },
            {
                path: '/profile',
                element: <ProfileNavigationLayout />,
                roles: ["Admin", "User"],
                childrens: [
                    {
                        path: '/profile/',
                        element: <Profile />,
                        roles: ['Admin', 'User']
                    }
                ]
            },
            {
                path: '/login',
                element: <Login />,
                roles: ["Guest"],
                redirect: '/profile'
            },
            {
                path: '/registration',
                element: <Registration />,
                roles: ["Guest"],
                redirect: '/profile'
            },
        ]
    },
]

const processRoutes = (routes: Route[]) => {
    return routes.map(route => {
        const processedRoute: any = {
            path: route.path,
            element: <ProtectedRoute skeleton={route.skeleton ? <>
                {route.skeleton}
                <Outlet />
            </> : undefined} roles={route.roles} element={route.element} redirect={route.redirect} />,
        };

        if (route.childrens) {
            processedRoute.children = processRoutes(route.childrens);
        }

        return processedRoute;
    });
};

const router = createBrowserRouter([
    ...processRoutes(routes),
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
        <>
            <RouterProvider router={router} />
        </>
    )
}
