import React, { Component } from "react";
import {Link} from 'react-router-dom';


class CreatePost extends Component {
  constructor(){
    super();

    this.state = {
      authorName: "",
      blogTitle: "",
      blogEntry: ""
    };

  }

  handleBlogChange = e => {
     e.preventDefault();
     console.log(e.target);
     this.setState({ blogEntry: e.target.value });
   };
   handleTitleChange = e => {
      e.preventDefault();
      console.log(e.target);
      this.setState({ blogTitle: e.target.value });
    };
    handleAuthorChange = e => {
       e.preventDefault();
       console.log(e.target);
       this.setState({ authorName: e.target.value });
     };



     addToList = (e) => {
          e.preventDefault();
          this.setState({
            authorName: e.target.value,
            blogTitle: e.target.value,
            blogEntry: e.target.value,

          });
          let blogListItem = JSON.stringify(this.state);
          console.log(blogListItem);
          fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
            method: "POST",
            body: blogListItem,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
        }
        ).then(response => {
          console.log(response, "yay");

        }).catch(err => {
          console.log(err, "boo!");
        });
        this.setState({authorName: '',
                      blogTitle: '',
                      blogEntry:''
      });
      };



  render() {
    return (
      <div>
    <form onSubmit={this.addToList}>
    <div >
    <div className= "form-group">
    <label className="form-control-label" for="author">Author:  </label>
    <br></br>
    <input name="author" type="text" className="form-control" placeholder="Enter your name or username" onChange={this.handleAuthorChange} value={this.state.authorName}/>
    <br></br>
    </div>
    <div className= "form-group">

    <label className="form-control-label" for="title">Title:  </label>
    <br></br>
    <input name="title" type="text"className="form-control" placeholder="Title" onChange={this.handleTitleChange} value={this.state.blogTitle}/>
     <br></br>
     </div>
     <div className= "form-group">

     <label className="form-control-label" for="blog">Blog Post: </label>
     <br></br>
    <textarea rows="4" cols="50" className="form-control" name="blog" type="text" placeholder="Blog..." onChange={this.handleBlogChange} value={this.state.blogEntry}></textarea>
    <br></br>
    </div>
    <button className="btn btn-info" type="submit">Post Blog</button>
    </div>
    </form>
    </div>
    );
  }
}

export default CreatePost;
