
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Features from './components/artistes/Features';
import Footer from './components/footer/Footer';
import Galerie from './components/galerie/Galerie';
import Evenement from './components/evenement/Evenement';
import Contacte from './components/contacte/Contacte';
function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar />
        <Header />
      </header>
    <Features /> 
    <Galerie />
    <Evenement /> 
    <Contacte />
    {/*<Footer />*/}
    </main>
  );
}

export default App;
