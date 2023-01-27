import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductCreateScreen from './screens/ProductCreateScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          
          <Routes>
          <Route path='/' element={<HomeScreen/>} exact > </Route>
          <Route path='/login' element={<LoginScreen/>} > </Route>
          <Route path='/register' element={<RegisterScreen/>} > </Route>
          <Route path='/profile' element={<ProfileScreen/>} > </Route>
          <Route path='/shipping' element={<ShippingScreen/>} > </Route>
          <Route path='/placeorder' element={<PlaceOrderScreen/>} > </Route>
          <Route path='/order/:id' element={<OrderScreen/>} > </Route>

          <Route path='/payment' element={<PaymentScreen/>} > </Route>
          <Route path='/product/:id' element={<ProductScreen/>} > </Route>
          <Route path='/cart/:id' element={<CartScreen/>} > </Route>
          <Route path="/cart" element={<CartScreen />} > </Route>

          <Route path='/admin/userlist' element={<UserListScreen/>} > </Route>
          <Route path='/admin/user/:id/edit' element={<UserEditScreen/>} > </Route>
          
          <Route path='/admin/productlist' element={<ProductListScreen/>} > </Route>
          <Route path='/admin/product/:id/create' element={<ProductCreateScreen/>} > </Route>
          <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} > </Route>
          <Route path='/admin/orderlist' element={<OrderListScreen/>} > </Route>

          </Routes>
          
        </Container>
      </main>
     <Footer/>
    </Router>
  );
}
  
export default App;
