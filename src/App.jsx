import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HeaderPublic from './components/HeaderPublic';
import './App.css';
import CataloguePage from './pages/CataloguePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import HeaderAdmin from './components/HeaderAdmin';
import HomeAdminPage from './pages/HomeAdminPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import OutputsInputsPage from './pages/OutputsInputsPage';
import UsersPage from './pages/UsersPage';
import DashboardPage from './pages/DashboardPage';
import CreateCategory from './pages/CreateCategory';
import CreateProduct from './pages/CreateProduct';
import CreateInputOutput from './pages/CreateInputOutput';
import CreateUser from './pages/CreateUser';
import Page404 from './pages/Page404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderPublic />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="catalogue" element={<CataloguePage />} />
          <Route path="aboutus" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        
        <Route path="/manager" element={<HeaderAdmin />}>
          <Route index element={<HomeAdminPage />} />

          <Route path="categories" element={<CategoriesPage />}></Route>
          <Route path="categories/create" element={<CreateCategory />} />

          <Route path="products" element={<ProductsPage />} />
          <Route path="products/create" element={<CreateProduct />} />

          <Route path="outputs-inputs" element={<OutputsInputsPage />} />
          <Route path="outputs-inputs/create" element={<CreateInputOutput />} />

          <Route path="users" element={<UsersPage />} />
          <Route path="users/create" element={<CreateUser />} />


          <Route path="dashboard" element={<DashboardPage />} />
        </Route>
          <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
