import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`

const UserName = styled.span`
  font-weight: 500;
  font-size: 18px;
  margin-right: 0.5rem;
`

const CommentText = styled.span`
  font-weight: 300;
  font-size: 14px;
`

const Comment = props => {
  return (
    <CommentContainer>
      <UserName><strong>{props.comment.username}</strong></UserName>{'   '}
      <CommentText>{props.comment.text}</CommentText>

    </CommentContainer>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;