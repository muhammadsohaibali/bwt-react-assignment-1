import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/404NotFound';
import About from './pages/about';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
