import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
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
import { useState } from 'react';

function App() {
  const [Autenticado, setAutenticado] = useState({ isLoggedIn: 0, nombre: "" });
  return (
    <BrowserRouter>
      <Routes>
        {Autenticado.isLoggedIn ===0 ? (
          <Route path="/" element={<HeaderPublic />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage setAutenticado={setAutenticado}/>} />
            <Route path="catalogue" element={<CataloguePage />} />
            <Route path="aboutus" element={<AboutUsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        ) : (
          <Route path="/manager" element={<HeaderAdmin setAutenticado ={setAutenticado} />}>
            <Route index element={<HomeAdminPage nombre= {Autenticado.nombre} />} />

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
        )
        }
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
