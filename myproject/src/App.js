// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

// import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Welcome from './First';
import Second from './Second';
import Newpage from './Newpage';
import Newclass from './Class';
import Testclass from './Testclass';
import Clock from './Clock';
import Events from'./Events';
import Ternary from './Ternaryopt'
import Newmap from './Newmap'
import Maping from './Maping'
import Forms from './Forms'
import Regform from './Regform'
import Hooks1 from './Hooks1';
import Effecthook from './Effecthook'
import Datafetch from './Datafetch'
import Abc from './Abc';
import Newfile from './Newfile'
import New from './New'
import EditStud from './EditStud';

const dt=new Date();
function App() {
// const dt=new Date().toLocaleString()

  return (
    // <div className="App">
    // <p>hii react</p>
    // <Welcome/>
    // <Second age="7" std="9"/>
    // <New/>
    // <Newclass/>
    // <Testclass/>
    // <Clock date={dt}/>
    // <Events />
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path='/welcome' element={ <Welcome/>}> </Route>
      <Route path='/second' element={ <Second age="7" std="9"/>}> </Route>
      <Route path='/newclass' element={ <Newclass/>}> </Route>
      <Route path='/newpage' element={<Newpage/>}> </Route>
      <Route path='/test' element={<Testclass/>}></Route>
      <Route path='/clock' element={ <Clock date={dt}/>}> </Route>
      <Route path='/events' element={ <Events/>}> </Route>
      <Route path='/map' element={ <Newmap/>}> </Route>
      <Route path='/Maping' element={<Maping/>}></Route>
      <Route path='/forms' element={<Forms/>}></Route>
      <Route path='/regform' element={<Regform/>}></Route>
      <Route path='/effecthook' element={<Effecthook/>}></Route>
      <Route path='/datafetch' element={<Datafetch/>}></Route>
      {/* <Route path='/abc' element={<Abc/>}></Route> */}
      <Route path='/abc' element={<Abc employeeId={123}/>}></Route>
      <Route path='/newfile' element={<Newfile/>}></Route>
      <Route path='/new' element={<New/>}></Route>
      <Route path='/' element={<Ternary/>}></Route>
      <Route path='/hooks' element={<Hooks1/>}></Route>
      <Route path='/editstud' element={<EditStud/>}></Route>
    </Routes>
    </BrowserRouter>

//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Testclass/>}></Route>
//       <Route path='/first' element={<Welcome/>}></Route>

//     </Routes>
//     </BrowserRouter>
  );
}

export default App;
