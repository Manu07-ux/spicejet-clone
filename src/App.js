import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Test from './components/test';

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Routes>
        <Route path = '/' element = {<Home />}></Route>
        <Route path='/login' element = {<Test />}></Route>
        {/* <Route path = '/store' element = {<Div1 />}></Route>
        <Route path = '/iphone' element = {<Div1 />}></Route>
        <Route path = '/ipad' element = {<Div1 />}></Route>
        <Route path = '/login' element = {<Profile />}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
