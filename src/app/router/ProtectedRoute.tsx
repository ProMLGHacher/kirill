// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from './types';
import { useAppSelector } from '../hooks/storeHooks';
import { selectUserRole } from '@/entities/user';

interface ProtectedRouteProps {
    element: React.ReactElement;
    roles: Role[];
    redirect?: string
}

const ProtectedRoute = ({ element, roles, redirect = '/' }: ProtectedRouteProps) => {

    const userRole = useAppSelector(selectUserRole)

    if (!roles.includes(userRole ?? 'Guest')) {
        return <Navigate to={redirect} replace />;
    }

    return element;
};

export default ProtectedRoute;
