import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import ProtectedRoute from './ProtectedRoute';
import UserProfile from '../pages/Demo/UserProfile/UserProfile';
import FlightReservation from '../pages/Demo/FlightReservation/FlightReservation';

export const routerConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'demo',
        children: [
          {
            path: 'user-profile',
            element: <UserProfile />,
          },
          {
            path: 'newletter',
            element: <div>Newletter</div>,
          },
          {
            path: 'flight-reservation',
            element: <FlightReservation />,
          },
          {
            path: 'settings',
            element: <div>Settings</div>,
          },
          {
            path: 'search',
            element: <div>Search</div>,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
