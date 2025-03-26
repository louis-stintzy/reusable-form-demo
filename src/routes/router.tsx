import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotFound from '../pages/NotFound/NotFound';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import ProtectedRoute from './ProtectedRoute';
import UserProfile from '../pages/Demo/UserProfile/UserProfile';
import FlightReservation from '../pages/Demo/FlightReservation/FlightReservation';
import LandingPage from '../pages/LandingPage/LandingPage';
import StartProject from '../pages/StartProject/StartProject';
import GetStarted from '../pages/GetStarted/GetStarted';
import Layout from '../components/Common/Layout/Layout';
import DocsPage from '../pages/DocsPage/DocsPage';
import LoginDemo from '../pages/Demo/LoginDemo/LoginDemo';
import SignupDemo from '../pages/Demo/SignupDemo/SignupDemo';

export const routerConfig = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: '',
            element: <LandingPage />,
          },
          {
            path: 'docs',
            element: <DocsPage />,
          },
          {
            path: 'get-started',
            element: <GetStarted />,
          },
          {
            path: 'start-project',
            element: <StartProject />,
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
        ],
      },
      {
        path: 'demo',
        children: [
          {
            path: 'login',
            element: <LoginDemo />,
          },
          {
            path: 'signup',
            element: <SignupDemo />,
          },
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
