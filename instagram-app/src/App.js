import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from 'prop-types';
import PostContainer from './components/PostContainer/PostContainer';

import './App.css';
import dummyData from './dummy-data.js';

const Test = (props) => {
  return (
    <h1>{props.str}</h1>
  )
}

Test.propTypes = {
  str: PropTypes.string
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filteredPosts: []
    }
    this.debug();
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  debug() {
    console.log(this.state.posts);
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });


    this.setState({ filteredPosts: posts });
  }
  render() {
    return (
      <div className="App">

        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer posts={
          this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.posts

        }
        />
        {/* <Test str={'EricHendrix'}/> */}
      </div>
    );
  }
}

export default App;
