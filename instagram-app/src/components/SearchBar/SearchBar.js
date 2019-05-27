import React from 'react';
import styled from 'styled-components';
import Logo from '../SearchBar/logo.png';
// import './SearchBar.css'

const LogoSize = 'font-size: 2rem;';
const SearchMarginBottom = 'margin-bottom: 10px;';

const SearchBarContainer = styled.header`
  border-bottom: solid 1px grey;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  height: 4rem;
  position: fixed;
  top: 0;
  width: 100%;
`;

const LogoHeader = styled.div`
  width: 300px;
  line-height: 75px;
`;

const LogoImage = styled.img`
  margin-left: 20px;
  margin-right: 20px;
  align-content: center;
  align-self: center;
  height: 4rem;
`;

const LogoImageOff = styled.img`
  margin-left: 20px;
  margin-right: 20px;
  align-content: center;
  align-self: center;
  height: 4rem;
`;

const InstaIcon = styled.i`
  margin-left: 20px;
  margin-right: 20px;
  align-content: center;
  align-self: center;
  ${LogoSize}
`;

const SocialIcon = styled.i`
  margin: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  ${LogoSize}
`;

const SearchInput = styled.input`
  align-self: center;
  margin-top: 0.25rem;
  height: 2rem;
  width: 250px;
  background-color: rgb(245, 245, 245);
  border-radius: 3px;
  font-size: 1rem;
  text-align: center;
  border: solid 1px lightgray;
  ${SearchMarginBottom}
`;

const SocialWrapper = styled.div`
  margin-left: 0rem;
  align-content: center;
  align-self: center;
  ${SearchMarginBottom}
`;

const SearchBar = props => {
  return (
    <SearchBarContainer>
      <InstaIcon className="fa fa-instagram" aria-hidden="true" />


      <LogoImage alt="instagram logo" src={Logo} />

      <SearchInput className="empty" type="Search" placeholder="&#xF002; Search" onKeyDown={props.searchPosts} />

      <SocialWrapper>
        <SocialIcon className="fa fa-compass" aria-hidden="true"></SocialIcon>
        <SocialIcon className="fa fa-heart-o" aria-hidden="true"></SocialIcon>
        <SocialIcon className="fa fa-user-o" aria-hidden="true" onClick={props.logout}></SocialIcon>

      </SocialWrapper>



    </SearchBarContainer>)

}

export default SearchBar;
