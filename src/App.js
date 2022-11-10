import { Route, Routes } from 'react-router-dom';
import Auth from './routes/Auth/Auth';
import Home from './routes/home/Home';
import Nav from './routes/nav/Nav';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Auth />} />
      </Route>
    </Routes>
  );
}

export default App;
