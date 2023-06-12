import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import LandingPage from '../components/LandingPage/LandingPage';
import { useContext, useEffect } from 'react';
import { Context } from '../index';
import Account from '../components/account/Account';

export default function AppRoutes() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {store.isAuth ? (
          <Route path="/dashboard" element={<Navigate to="/dashboard" replace />} />
        ) : (
          <Route path="/signin" element={<Account />} />
        )}
      </Routes>
    </Router>
  );
}
