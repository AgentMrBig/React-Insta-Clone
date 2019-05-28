import React from 'react';
import styled from 'styled-components'

const CommentForm = styled.form`
    display: flex;
    border-top: 1px solid #e3e3e3;
    width: 100%;
    height: 70px;
    padding:0;
    margin: 0;
`

const CommentInputField = styled.input`
    margin-left: 0;
    margin-bottom: 5px;
    width: 75%;
    border-radius: 0  0  0 5px;
    border: none;
    text-align: left;
    background-color: rgb(243, 241, 241);
    height: 60px;
    padding-left: 20px;
    text-size: 4rem;
    /* border: solid 1px purple; */
`

const PostSubmit = styled.button`
    padding:12px;
    padding-bottom: 16px;
    padding-top: 8px;
    margin-bottom: 2px;
    color: lightblue;
    font-size: 1.2rem;
    border:none;
    margin-bottom: 5px;
    background-color: rgb(243, 241, 241);
`

const CommentInput = props => {
    return (
        <CommentForm onSubmit={props.submitComment}>
            <CommentInputField
                className="commentInput"
                type="text"
                value={props.comment}
                placeholder="   Add comment... "
                onChange={props.changeComment}
            />
            <PostSubmit onClick={props.submitComment}><strong>Post</strong></PostSubmit>
        </CommentForm>
    );
};

export default CommentInput;