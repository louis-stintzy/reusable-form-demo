import { useEffect, useState } from 'react';
import { useAuth } from '../store/hooks/useAuth';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const { verifyToken } = useAuth();
  console.log('1/ ProtectedRoute BEGIN');
  // console.log('1/ ProtectedRoute isAuthenticated', isAuthenticated);

  useEffect(() => {
    console.log('3/ useEffect');
    const verifyAccess = async () => {
      try {
        console.log('3a/ verifyAccess - Before token validation:');
        const isTokenValid = await verifyToken();
        console.log('3c/ verifyAccess - Token validation:', isTokenValid);
        if (isTokenValid) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error('3d/ Erreur Token validation', error);
      }
    };

    verifyAccess().catch(() => setIsAuthorized(false));
  }, [verifyToken]);

  if (isAuthorized === null) {
    // if (isLoading) console.log('3b/ ProtectedRoute isLoading : ', isLoading); // afficher loader ailleurs pour éviter rerendus inutile du à son changement (toujours 5 rendus ... 5x 1/ ProtectedRoute BEGIN)
    if (isAuthorized === null)
      console.log('2/ Loading - ProtectedRoute isAuthorized : ', isAuthorized);
    return <div>Loading...</div>;
  }
  console.log('4/ ProtectedRoute isAuthorized', isAuthorized);
  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
