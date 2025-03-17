import { NavLink } from 'react-router-dom';
import Navbar from '../../components/PageComponents/LandingPage/Navbar/Navbar';

import './LandingPage.css';
import HeroSection from '../../components/PageComponents/LandingPage/HeroSection/HeroSection';

function LandingPage() {
  return (
    <div className="home-page__container">
      <Navbar />
      <div className="container">
        <HeroSection />
        <h1 className="text-red-500">Home</h1>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-blue-500">---NavBar---</h2>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          <NavLink to="/reset-password">Reset Password</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-blue-500">---Getting Started---</h2>
          <h3 className="text-green-500">*Initiate a Vite project*</h3>
          <code>npm create vite@latest</code>
          <p>choose a React project with Typescript</p>
          <a href="https://vite.dev/guide/#scaffolding-your-first-vite-project">
            Vite documentation
          </a>
          <h3 className="text-green-500">
            *Install the necessary dependencies*
          </h3>
          <ul>
            {' '}
            <li>react-hook-form</li> <li>react-router-dom</li> <li>zod</li>
          </ul>
          <p>TODO: reusable form installation</p>
          <code>npm install react-hook-form react-router-dom zod</code>
          <h3 className="text-green-500">*Run the project*</h3>
          <code>npm run dev</code>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 className="text-blue-500">---Demo---</h2>
          <h3 className="text-green-500">*User Profile*</h3>
          <h4>Input Type</h4>
          <ul>
            <li>text</li>
            <li>email</li>
            <li>date</li>
            <li>file</li>
            <li>checkbox</li>
          </ul>
          <NavLink to="/demo/user-profile">User Profile</NavLink>
          <h3 className="text-green-500">*Flight Reservation*</h3>
          <ul>
            <li>Input Type</li>
            <li>select</li>
            <li>date</li>
            <li>number</li>
            <li>switch</li>
          </ul>
          <NavLink to="/demo/flight-reservation">Flight Reservation</NavLink>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
