import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


// Props are Read-Only in React. You can't change the value of props in the child component. The parent component can change the value of props and send them to the child component. The child component can use props but can't change them.
// Parent Component: The component which is defined in the App.js file is the parent component.
// Child Component: The component which is defined in the Navbar.js file is the child component.
// The parent component can send the value of props to the child component. The child component can use the value of props but can't change it.

function Navbar(props) {
    return (
        // <nav className="navbar navbar-expand-lg bg-light mb-4">
         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">{props.AboutText}</a> */}
                {/* <Link className="nav-link" to="/about">{props.AboutText}</Link> */}
              {/* </li> */}
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'Dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    )
    }

    // Default Props: Prop types are used to check the type of props. If the type of props is not matched then it will show a warning in the console. But if you want to set a default value of props then you can use defaultProps. If the value of props is not passed from the parent component then the default value of props will be used.
    Navbar.defaultProps = {
        title: 'Set title here',
        AboutText: 'Write About',
    }
    Navbar.propTypes = {
        title: PropTypes.string.isRequired,
        AboutText: PropTypes.string,
    }
export default Navbar;