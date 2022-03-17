import logo from './logo.svg';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';

function App() {
  return (
    
<Router>
<div className="App">
      <Navbar dark color="primary">
        <div className='container'>
        <NavbarBrand href='/'>
            Home
          </NavbarBrand>
        
            
        </div>
      </Navbar>
    </div>
    
</Router>



 
  );
}

export default App;
