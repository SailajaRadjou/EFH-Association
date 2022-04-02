
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar />
        <Header />
      </header>
    <Features />  
    <Footer />
    </main>
  );
}

export default App;
