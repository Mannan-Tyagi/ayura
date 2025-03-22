import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './modules/HomePage/HomePage';
import LoginPage from './modules/LoginPage/LoginPage';
import Dashboardpage from './modules/DashboardPage/DashboardPage';
import PlantPage from './modules/PlantPage/PlantPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
        <Route path="*" element={<PlantPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
