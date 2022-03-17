import logo from './logo.svg';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import NavigationBar from './navigationbar';
import AboutMe from './about';
import './css/style.css';


function App() {
  return (
    
<Router>
<NavigationBar/> 
<AboutMe/>

</Router>



 
  );
}

export default App;
