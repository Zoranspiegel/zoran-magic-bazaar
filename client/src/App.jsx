import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

const App = () => {
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
