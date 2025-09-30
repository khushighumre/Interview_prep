import React, {useContext} from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';

const DashboardLayout = ({children}) => {
    const {user} = useContext(UserContext);
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar/>

      {user && <div className='pt-4 pb-8'>{children}</div>}
    </div>
  );
};

export default DashboardLayout;
