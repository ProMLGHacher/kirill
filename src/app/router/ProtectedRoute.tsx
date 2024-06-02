// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { Role } from './types';
import { useAppSelector } from '../hooks/storeHooks';
import { selectUserRole } from '@/entities/user';

interface ProtectedRouteProps {
    element: React.ReactElement;
    roles: Role[];
}

const ProtectedRoute = ({ element, roles }: ProtectedRouteProps) => {

    const userRole = useAppSelector(selectUserRole)

    if (!roles.includes(userRole ?? 'Guest')) {
        // Если у пользователя нет необходимой роли, перенаправляем на страницу 403
        return <Navigate to="/403" replace />;
    }

    return element;
};

export default ProtectedRoute;
