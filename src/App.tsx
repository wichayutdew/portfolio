import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage';
import About from './pages/about';
import Projects from './pages/projects';
import Articles from './pages/articles';
import Contact from './pages/contact';
import NotFound from './pages/notfound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
