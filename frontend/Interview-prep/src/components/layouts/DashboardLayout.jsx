import React, {useContext} from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';

const DashboardLayout = ({children}) => {
    const {user, loading} = useContext(UserContext);
  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar/>

      {loading ? (
        <div className='flex items-center justify-center min-h-[50vh]'>
          <div className='text-center'>
            <div className='w-8 h-8 border-4 border-orange-300 border-t-orange-600 rounded-full animate-spin mx-auto mb-4'></div>
            <p className='text-gray-600'>Loading...</p>
          </div>
        </div>
      ) : user ? (
        <div className='pt-4 pb-8'>{children}</div>
      ) : (
        <div className='flex items-center justify-center min-h-[50vh]'>
          <p className='text-gray-600'>Please log in to continue</p>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
