import React, { Component } from "react";
import {Link} from 'react-router-dom';


class ShowPost extends Component {
  constructor(){
    super();

    this.state = {
      blogDetails: [],
    };

  }

  componentDidMount(){
    const { id } = this.props.match.params;
    const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;
  fetch(URL).then(results => {
        return results.json();
      }).then(data => {
        this.setState({blogDetails: data});
        console.log("state", this.state.blogDetails);
      })
    }


    render() {

          return (
            <div>
              <h1> You Made it to the Promise Land</h1>
              <h2> {this.state.blogDetails.blogTitle}</h2>
              <p>{this.state.blogDetails.blogEntry} </p>
              <h4>{this.state.blogDetails.authorName}</h4>
              <button className="button"><Link to="/postlist">Back to Blogs</Link></button>
            </div>
          );
      }

}

export default ShowPost;
