import React from 'react';
import styled from 'styled-components';
import Post from './Post';


const PostWrapper = styled.div`
    display:flex;
    flex-direction: column;
    /* border: solid 1px grey; */
    margin-top: 20px;
    width: 40rem;
    align-self: center;
    border-radius: 5px;
`;

const PostContainer = props => {
    return (
        <PostWrapper>
            {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </PostWrapper>)

}

export default PostContainer;