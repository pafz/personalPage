import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
//import HomeClass from './components/HomeClass/HomeClass';
//import HeaderClass from './components/HeaderClass/headerClass';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutme from './components/Aboutme/Aboutme';

const home = 'pat Home';
const aboutme = 'pat Life';
const show = 'pat Show';

const title = 'Tomorrow I will come back';
const textCome = 'Lorem ipsum';
const showMyEvent = 'Next week I will be on...';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        {/* <h1> */}
        {/* <Home title={title}/></h1>
  <Home textCome={textCome}/>
  <Home showMyEvent={showMyEvent}/>
  <Contact/> */}
      </div>
      {/* <div> //The same using classes
  <HeaderClass home={home} aboutme={aboutme} show={show}/>
  <h1>
  <HomeClass title={title}/></h1>
  <HomeClass textCome={textCome}/>
  <HomeClass showMyEvent={showMyEvent}/>
</div> */}
    </>
  );
}

export default App;
