import React, { useState, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import Input from '../../components/Inputs/Input';
import axiosinstance from '../../utils/axiosinstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axiosinstance.put(API_PATHS.AUTH.UPDATE_PROFILE, formData);
      
      if (response.data) {
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        toast.success('Profile updated successfully!');
      }
    } catch (error) {
      toast.error('Failed to update profile');
      console.error('Profile update error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="w-full px-4 md:px-8 py-8 max-w-2xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Edit Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={({ target }) => handleChange('name', target.value)}
            placeholder="Enter your full name"
          />
          
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={({ target }) => handleChange('email', target.value)}
            placeholder="Enter your email"
          />
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Updating...' : 'Update Profile'}
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Profile;