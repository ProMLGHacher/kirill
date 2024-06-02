import { createBrowserRouter, Link, Navigate, RouterProvider } from "react-router-dom"
import { Route } from "./types";
import ProtectedRoute from "./ProtectedRoute";
import HeaderLayout from "../layouts/HeaderLayout/HeaderLayout";
import { Main } from "@/pages/main";


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
            }
        ]
    },
]

const processRoutes = (routes: Route[]) => {
    return routes.map(route => {
      const processedRoute: any = {
        path: route.path,
        element: <ProtectedRoute roles={route.roles} element={route.element} />,
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
        <RouterProvider router={router} />
    )
}
