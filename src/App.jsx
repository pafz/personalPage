import './App.css'
import Header from './components/Header/Header'
import HeaderClass from './components/HeaderClass/headerClass';
import Home from './components/Home/home';
import HomeClass from './components/HomeClass/HomeClass';


const home = 'pat Home';
const aboutme = 'pat Life';
const show = 'pat Show';

const title = 'Tomorrow I will come back';
const textCome = 'Lorem ipsum';
const showMyEvent = 'Next week I will be on...';

function App() {
  return (
    <>
<Header home={home} aboutme={aboutme} show={show}/>
<container>
  <h1>
  <Home title={title}/></h1>
  <Home textCome={textCome}/>
  <Home showMyEvent={showMyEvent}/>
</container>
<div>
  <HeaderClass home={home} aboutme={aboutme} show={show}/>
  <h1>
  <HomeClass title={title}/></h1>
  <HomeClass textCome={textCome}/>
  <HomeClass showMyEvent={showMyEvent}/>
</div>
    </>
  )
}

export default App
