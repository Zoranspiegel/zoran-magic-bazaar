import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/actions';
import NavBar from './components/NavBar';
import Home from './components/Home';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
