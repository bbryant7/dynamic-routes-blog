import React, { Component } from "react";
import {Link} from 'react-router-dom';


class PostList extends Component {
  constructor(){
    super();

    this.state = {
      blogs: [],
    };

  }

  componentDidMount(){
  fetch('https://tiny-lasagna-server.herokuapp.com/collections/blogger/').then(results => {
        return results.json();
      }).then(data => {
        this.setState({blogs: data});
        console.log("state", this.state.blogs);
      })
    }


    render() {
      let blogs = this.state.blogs.map((blog, index) =>{
          return (
            <div key={index} className="card w-100">
              <div className="card-body">
                <br></br>
                <Link to={`/showpost/${blog._id}`}>{blog.blogTitle}</Link>
              </div>
            </div>
          );
      });
      return (
        <div>
        {blogs}
      </div>

      )
}
}

export default PostList;
