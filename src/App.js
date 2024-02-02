import './App.css';
import ContactMe from './Components/Contactme/ContactMe';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/Navbar/NavBar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
        <NavBar/>
        <div className='container'>
          <Hero/>
          <Skills/>
          <Projects/>
          <ContactMe/>
        </div>
        <Footer/>
    </>
  );
}

export default App;
