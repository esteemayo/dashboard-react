import { Outlet } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

import QueryProvider from '../../providers/QueryProvider';

import './layout.scss';

const Layout = () => {
  return (
    <main className='main'>
      <Navbar />
      <div className='container'>
        <div className='menuContainer'>
          <Menu />
        </div>
        <div className='contentContainer'>
          <QueryProvider>
            <Outlet />
          </QueryProvider>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
