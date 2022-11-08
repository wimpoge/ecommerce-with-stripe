import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Nav from './routes/nav/Nav';
import SignIn from './routes/sign-in/SignIn';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
