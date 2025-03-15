import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>---NavBar---</h2>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/reset-password">Reset Password</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>---Getting Started---</h2>
        <h3>*Initiate a Vite project*</h3>
        <code>npm create vite@latest</code>
        <p>choose a React project with Typescript</p>
        <a href="https://vite.dev/guide/#scaffolding-your-first-vite-project">
          Vite documentation
        </a>
        <h3>*Install the necessary dependencies*</h3>
        <ul>
          {' '}
          <li>react-hook-form</li> <li>react-router-dom</li> <li>zod</li>
        </ul>
        <p>TODO: reusable form installation</p>
        <code>npm install react-hook-form react-router-dom zod</code>
        <h3>*Run the project*</h3>
        <code>npm run dev</code>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2>---Demo---</h2>
        <h3>*User Profile*</h3>
        <h4>Input Type</h4>
        <ul>
          <li>text</li>
          <li>email</li>
          <li>date</li>
          <li>file</li>
          <li>checkbox</li>
        </ul>
        <NavLink to="/demo/user-profile">User Profile</NavLink>
        <h3>*Flight Reservation*</h3>
        <ul>
          <li>Input Type</li>
          <li>select</li>
          <li>text</li>
          <li>date</li>
          <li>number</li>
          <li>checkbox</li>
        </ul>
        <NavLink to="/demo/flight-reservation">Flight Reservation</NavLink>
      </div>
    </>
  );
}

export default Home;
