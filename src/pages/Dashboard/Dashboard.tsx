import { useEffect } from 'react';
import { useAuth } from '../../store/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      void navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <p>Dashboard</p>
    </>
  );
}

export default Dashboard;
