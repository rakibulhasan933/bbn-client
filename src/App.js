
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import Admin from './components/Admin/Admin/Admin';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import OrderList from './components/Admin/OrderList/OrderList';
import AddProduct from './components/Admin/AddProduct/AddProduct';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/Admin/ManageService/ManageService';
import Book from './components/DashBoard/Book/Book';
import PackageList from './components/DashBoard/PackageList/PackageList';
import Review from './components/DashBoard/Review/Review';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const ProductContext = createContext();
export const UserContext = createContext();
export const ProductsContext = createContext();

function App() {
  const [selectProduct, setSelectProduct] = useState([]);
  const [loginUser, setLoginUser] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={[selectProduct, setSelectProduct]}>
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <ProductsContext.Provider value={[products, setProducts]}>
          <Router>
            <Navbar></Navbar>
            <Switch>
              <PrivateRoute path="/book">
                <Book></Book>
              </PrivateRoute>
              <PrivateRoute path="/packageList">
                <PackageList></PackageList>
              </PrivateRoute>
              <PrivateRoute path="/review">
                <Review></Review>
              </PrivateRoute>
              <PrivateRoute path="/orderList">
                <OrderList></OrderList>
              </PrivateRoute>
              <PrivateRoute path="/addPackage">
                <AddProduct></AddProduct>
              </PrivateRoute>
              <PrivateRoute path="/addAdmin">
                <MakeAdmin></MakeAdmin>
              </PrivateRoute>
              <PrivateRoute path="/manageService">
                <ManageService></ManageService>
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <DashBoard></DashBoard>
              </PrivateRoute>
              <PrivateRoute path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              <PrivateRoute path="/blog">
                <Blog></Blog>
              </PrivateRoute>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
        </ProductsContext.Provider>
      </UserContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
