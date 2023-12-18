import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <main className='main'>
      <Navbar />
      <Menu />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
