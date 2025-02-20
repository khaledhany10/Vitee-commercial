import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

const ProtectRoute = ({ children }) => {
  const { token } = useContext(authContext); 

  return token ? children : <Navigate to="/Login" />;
};

export default ProtectRoute;
