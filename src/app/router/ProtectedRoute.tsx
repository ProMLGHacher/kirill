// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from './types';
import { useAppSelector } from '../hooks/storeHooks';
import { selectUserLoading, selectUserRole } from '@/entities/user';
import { Loader } from '@/shared/ui/Loader/Loader';

interface ProtectedRouteProps {
    element: React.ReactElement
    roles: Role[]
    redirect?: string
    skeleton?: React.ReactElement
}

const ProtectedRoute = ({ element, roles, redirect = '/', skeleton }: ProtectedRouteProps) => {

    const userRole = useAppSelector(selectUserRole)
    const isLoading = useAppSelector(selectUserLoading)

    if (roles.includes('Guest') && !userRole) {
        return element;
    }

    if (isLoading) {
        return skeleton ? skeleton : <Loader />
    }
    
    if (!roles.includes(userRole ?? 'Guest')) {
        return <Navigate to={redirect} replace />;
    }

    return element;
};

export default ProtectedRoute;
