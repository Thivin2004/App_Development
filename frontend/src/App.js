import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Pages/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Pricing from './Pages/Pricing';
import Login from './components/Login';
import Signup from './components/Signup';
import TermsConditions from './Pages/TermsConditions';
import FAQ from './Pages/FAQ';
import GoalSetting from './Pages/GoalSetting'; 
import NutritionDiet from './Pages/NutritionDiet';
import ProgressTracking from './Pages/ProgressTracking';
import WorkoutPlans from './Pages/WorkoutPlans';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogin = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div id="root">
        <NavBar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/goal-setting" element={<GoalSetting />} /> 
            <Route path="/nutrition-diet" element={<NutritionDiet />} />
            <Route path="/progress-tracking" element={<ProgressTracking />} />
            <Route path="/workout-plans" element={<WorkoutPlans />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
