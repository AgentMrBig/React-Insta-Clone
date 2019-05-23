import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PropTypes from 'prop-types';
import PostContainer from './components/PostContainer/PostContainer';

import './App.css';

const Test = (props) => {
  return (
    <h1>{props.str}</h1>
  )
}

Test.propTypes = {
  str:PropTypes.string
}

class App extends Component {
        constructor(props) {
      super(props);
    this.state = {
        //posts: dummyData
      }
      }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
        <Test str={'EricHendrix'}/>
      </div>
      );
    }
  }
  
  export default App;
