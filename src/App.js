import './App.css';
import { useState } from "react";
import Home from './components/Home';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Store from './pages/Store';
import Gmail from './pages/Gmail';
import Images from './pages/Images';
import Sidedrawer from './components/Sidedrawer';
import Backdrop from './components/Backdrop';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Navbar click={() => setSideToggle(true)} />
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/store' component={Store} />
        <Route path='/gmail' component={Gmail} />
        <Route path='/images' component={Images} />
      </Switch>
    </>
  );
}

export default App;
