import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withAuthenticate from './components/Authentication/withAuthenticate'
import LoginPage from './components/Login/LoginPage'
import PostsPage from './components/PostContainer/PostsPage'

import './App.css';


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
    this.state = {};

  }

  render() {
    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    )
  }

}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
