import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../components/Auth/SignIn';
import SignUp from '../components/Auth/SignUp';
import LandingPage from '../components/LandingPage/LandingPage';

export default function AppRoutes() {
  return (
    // <Router basename="/learning-managment-system">

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
