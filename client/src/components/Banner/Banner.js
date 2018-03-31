import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

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
      <div style={{ "borderBottom": "8px solid #28a745" }}>
        <Navbar color='dark' dark expand='md'>
          <NavbarBrand href='/' className='mr-auto ml-5'><h1>NYT Article Search</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className='ml-auto mr-5' navbar>
              <NavItem>
                <NavLink href='/user/'>Log in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/user/'>Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Banner



