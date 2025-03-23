import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
// import Footer from './Footer/Footer';

import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
