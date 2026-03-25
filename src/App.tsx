import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorksPage from './pages/HowItWorksPage';
import FeaturesPage from './pages/FeaturesPage';
import Contact from './pages/Contact';
import styles from './styles/LandingPage.module.css';

function App() {
  return (
    <Router>
      <div className={styles.appShell}>
        <Header />
        <div className={styles.appContent}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/como-funciona" element={<HowItWorksPage />} />
              <Route path="/funcionalidades" element={<FeaturesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
