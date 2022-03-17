import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Container} from 'reactstrap';
const NavigationBar = ()=>
{
    return(
  <div>
    <Container>
      
  <Navbar
    
    expand="sm"
    className='text-light fixed-top'
    style={{backgroundColor: '#D14223'}}
  >
    <NavbarBrand href="/"   className='text-light'>
      Home
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="sm-auto"
        navbar
      >
        <NavItem>
          <NavLink href="#about"   className='text-light'>
            1. About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#experience"  className='text-light'>
            2. Experience
          </NavLink>
        </NavItem>        
        <NavItem>
          <NavLink href="#work"  className='text-light'>
            3. Work
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#contact"  className='text-light'>
            4. Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://docs.google.com/document/d/1v-FoDbxUfYcrWk0uz11fNVsEUwCUvmYv/edit?usp=sharing&ouid=105831371106230691691&rtpof=true&sd=true"  className='text-light'>
            Resume
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  
  </Container>
</div>
    );
}

export default NavigationBar;