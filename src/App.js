
import './App.css';
import { NavBar} from './components/NavBar';
import { Banner} from './components/Banner';
import { Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';
import {About} from  './components/About';

import '@fortawesome/fontawesome-svg-core/styles.css';





import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
     

    </div>
  );
}

export default App;
