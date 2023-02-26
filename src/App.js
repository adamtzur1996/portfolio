import './App.scss';
import Banner from './components/Banner/Banner';
import Infoslot from './components/Infoslot/Infoslot';
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Collaboration from './components/Collaboration/Collaboration';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import ContactMe from './components/ContactMe/ContactMe';


function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <AboutMe />
        {/* <Infoslot /> */}
        <Collaboration />
        <Experience />
        <ContactMe />
        <Footer />
    </div>
  );
}

export default App;
