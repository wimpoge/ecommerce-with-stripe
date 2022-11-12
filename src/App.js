import { Route, Routes } from 'react-router-dom';
import Auth from './routes/Auth/Auth';
import Home from './routes/home/Home';
import Nav from './routes/nav/Nav';
import Shop from './routes/shop/Shop';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
