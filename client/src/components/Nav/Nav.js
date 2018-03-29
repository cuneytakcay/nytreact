import React from 'react'

const Nav = props => (
  <nav className='navbar bg-success'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <button type='button' className='collapsed navbar-toggle'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' /> 
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <h1>
          <a href='/' className='navbar-brand'>
            NYT Article Scrubber
          </a>
        </h1>
      </div>
    </div>
  </nav>
)

export default Nav

