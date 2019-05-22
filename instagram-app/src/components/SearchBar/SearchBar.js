import React from 'react';
import ReactDOM from 'react-dom';

const SearchBar = props => {
  return (
    <div className="searchBar">
      <i className="fa fa-instagram" aria-hidden="true" />

      <input type="text" placeholder="&#xF002; Search" style="font-family:Arial, FontAwesome" />

      <div className="topRightIcons">
        <i className="fa fa-compass" aria-hidden="true"></i>
        <i className="fa fa-heart-o" aria-hidden="true"></i>
        <i className="fa fa-user-o" aria-hidden="true"></i>

      </div>



    </div>)

}

export default SearchBar;
