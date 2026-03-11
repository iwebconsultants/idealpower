import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../hooks/useAdminAuth';

/**
 * A wrapper component that redirects to the login page if not authenticated 
 * or if the authenticated Google email is not approved.
 */
export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, isAuthorized } = useAdminAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  if (!user || !isAuthorized) {
    // If logged in but not authorized, or not logged in at all, kick to login
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
