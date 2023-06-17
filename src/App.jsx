import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import HeaderPublic from './components/HeaderPublic';
import './App.css';
import Footer from './components/FooterPublic';
import CataloguePage from './pages/CataloguePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderPublic />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="catalogue" element={<CataloguePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
