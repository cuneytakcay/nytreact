import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-inverse navbar-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='collapsed navbar-toggle'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' /> 
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <a href='/' className='navbar-brand'>
              NYT Article Scrubber
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
