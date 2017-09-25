import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Sky from '../styles/casey-horner-339150.jpg'

export default class BaseLayout extends Component {
  render(){
    let headerStyle = {
      "textAlign": "center",
      "height": "35vw",
      "color": "#fff",
      "backgroundImage": {Sky},
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none",
      "boxShadow":"rgba(0, 0, 0, 0.22) -2px 9px 5px 0px",
    }
    return (
      <div className="container-fluid nav">
        <nav className="row navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" exact to='/'> <span className="splash">PollyBlog</span></NavLink>
                </li>
                <li>
                  <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" exact to='/createpost'> <span className="splash">Create Post </span></NavLink>
                </li>
                <li>
                <NavLink activeClassName="selected"  activeStyle={{color: "#FAD334"}} className="nav-link" exact to='/showpost'> <span className="splash">Show All Posts</span></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
        <footer className="col-lg-12">
          <span>
            PollyBlog
          </span>
        </footer>
      </div>
    );
  }
}
