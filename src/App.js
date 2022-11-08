import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';
import HomeLayout from './sharedLayout/HomeLayout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path='news' element={<News />} />
        <Route path='events' element={<Events />} />
        <Route path='about-us' element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

export default App;
