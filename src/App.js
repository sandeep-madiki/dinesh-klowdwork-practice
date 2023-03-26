// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home'
import Airlines from './components/home/airlines'
import Passengers from './components/home/passengers';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route exact path='/airlines' Component={Airlines}/>
          <Route exact path='/passengers' Component={Passengers}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
