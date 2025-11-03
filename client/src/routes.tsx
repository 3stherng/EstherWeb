import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/Projects';

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cv" element={<CV />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
);

export default AppRoutes;
