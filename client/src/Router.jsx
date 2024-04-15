import { Container } from 'react-bootstrap';
import Home from './components/pages/Home/Home';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen//RegisterScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen/PlaceOrderScreen';
import { Route, Routes } from 'react-router-dom';


export default function Router() {
  return (
    <div>
      <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/payment' element={<PaymentScreen />} />
              <Route path='/placeorder' element={<PlaceOrderScreen />} />
              <Route path='/shipping' element={<ShippingScreen />} />
              <Route path='/login' element={<LoginScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id?' element={<CartScreen />} />
              <Route path='/' element={<Home />} exact />
            </Routes>
          </Container>
        </main>
    </div>
  )
}
