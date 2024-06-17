import { createBrowserRouter, Link, Navigate, Outlet, RouterProvider } from "react-router-dom"
import { Route } from "./types";
import ProtectedRoute from "./ProtectedRoute";
import HeaderLayout from "../layouts/HeaderLayout/HeaderLayout";
import { Main } from "@/pages/main";
import { Login } from "@/pages/Login";
import { Registration } from "@/pages/Register";
import { Profile } from "@/pages/profile";
import { ProfileNavigationLayout } from "../layouts/ProfileNavigationLayout/ProfileNavigationLayout";
import { Security } from "@/pages/Security";
import Skeleton from "@/shared/ui/Skeleton/Skeleton";
import { PortfolioDetails } from "@/pages/prtfolioDetails/ui/PortfolioDetails";
import { Orders } from "@/pages/orders";
import { MemorialDetails } from "@/pages/memorialDetails";


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
                path: '/portfolio/:id',
                element: <PortfolioDetails />,
                roles: ["Guest", "Admin", "User"]
            },
            {
                path: '/memorial/:id',
                element: <MemorialDetails/>,
                roles: ["Guest", "Admin", "User"]
            },
            {
                path: '/profile/',
                element: <ProfileNavigationLayout />,
                roles: ["Admin", "User"],
                skeleton: <Skeleton />,
                childrens: [
                    {
                        path: '/profile/',
                        element: <Navigate to={'/profile/account'} />,
                        roles: ['Admin', 'User'],
                    },
                    {
                        path: '/profile/account',
                        element: <Profile />,
                        roles: ['Admin', 'User'],
                    },
                    {
                        path: '/profile/orders',
                        element: <Orders />,
                        roles: ['Admin', 'User'],
                    },
                    {
                        path: '/profile/security',
                        element: <Security />,
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
