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
        </Navbar>
      </Container>
    )
  }
}

export default Banner



