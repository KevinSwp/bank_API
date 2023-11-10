import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * PrivateRoute component.
 * Used to protect certain routes that require authentication.
 */
function PrivateRoute() {
  // Using the 'useSelector' hook to retrieve the current user data from the Redux store
  const user = useSelector(state => state.user);

  // If the user exists and has a token, 
  // render the <Outlet /> component, which is a placeholder for the child components/routes.
  // Otherwise, redirect the user to the "/" page using the <Navigate /> component.
  return user && user.token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
