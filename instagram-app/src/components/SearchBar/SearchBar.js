import React from 'react';
import Logo from '../SearchBar/logo.png';
import './SearchBar.css'

const SearchBar = props => {
  return (
    <div className="searchBar">
      <i id="icon_insta" className="fa fa-instagram bottomPadding iconSizer" aria-hidden="true" />

      <div className="logo">
        <img alt="instagram logo" src={Logo} className="logo-image" />
      </div>
      <input className="empty bottomPadding" type="Search" placeholder="&#xF002; Search" />

      <div className="topRightIcons bottomPadding">
        <i className="fa fa-compass iconSizer" aria-hidden="true"></i>
        <i className="fa fa-heart-o iconSizer" aria-hidden="true"></i>
        <i className="fa fa-user-o iconSizer" aria-hidden="true"></i>

      </div>



    </div>)

}

export default SearchBar;
