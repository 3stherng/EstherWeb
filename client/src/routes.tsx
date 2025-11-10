import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
);

export default AppRoutes;
