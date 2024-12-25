import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import HomeLayout from './Home/HomeLayout';
import Signin from './Sign-in/Signin';
import Repositories from './Home/Repositories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Signin />} />
          <Route path='/repositories' element={<HomeLayout />}>
            <Route index element={<Repositories />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
