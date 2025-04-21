import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkAuth } from '../utils/auth';

const ProtectedRoute = ({ children, requiredRole }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  
  console.log('Current Token:', token);
  
  useEffect(() => {
    if (!checkAuth()) {
      navigate('/login');
    }
    // Optional: Check user role if requiredRole is provided
  }, [navigate]);

  return children;
};

export default ProtectedRoute;