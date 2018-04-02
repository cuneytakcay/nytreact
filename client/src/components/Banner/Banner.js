import React from 'react'
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import './Banner.css'

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Container fluid>
      <Navbar className='banner' color='dark' dark expand='md'>
        <NavbarBrand href='/' className='mr-auto ml-5 pl-4'><h1>NYT Article Search</h1></NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className='toggler ml-3 mr-5' />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className='ml-auto mr-5 pr-4' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/login/'>Log in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/signup/'>Sign up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar></Container>
    )
  }
}

export default Banner



