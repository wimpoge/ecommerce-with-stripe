import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Auth from './routes/Auth/Auth';
import Checkout from './routes/checkout/checkout';
import Home from './routes/home/Home';
import Nav from './routes/nav/Nav';
import Shop from './routes/shop/Shop';
import { setCurrentUser } from './store/user/user.action';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user))

    })
    return unsubscribe

}, [])

  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
