import React from 'react';

import './SearchBar.css'

const SearchBar = props => {
  return (
    <div className="searchBar">
      <i id="icon_insta" className="fa fa-instagram fa-3x bottomPadding" aria-hidden="true" />

      <input className="empty bottomPadding" type="Search" placeholder="&#xF002; Search" />

      <div className="topRightIcons bottomPadding">
        <i className="fa fa-compass fa-3x" aria-hidden="true"></i>
        <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
        <i className="fa fa-user-o fa-3x" aria-hidden="true"></i>

      </div>



    </div>)

}

export default SearchBar;
