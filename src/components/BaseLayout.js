import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render(){
    let headerStyle = {
      "textAlign": "center",
      "height": "35vw",
      "color": "#fff",
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
                  <NavLink activeClassName="selected"  activeStyle={{color: "yellow"}} className="nav-link" exact to='/'> <span className="splash">PollyBlog</span></NavLink>
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
          <div className="col-lg-12 header" style={headerStyle}>
            <div className="starwars">
              <img src="//cssanimation.rocks/demo/starwars/images/star.svg" alt="Star" />
              <img src="//cssanimation.rocks/demo/starwars/images/wars.svg" alt="Wars"/>
              <h2 className="byline" id="byline">Welcome to PollyBlog</h2>
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
