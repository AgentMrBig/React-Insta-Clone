import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'

const PostContainer = props => {
    return (
        <div className="postContainer">
            <div className="postHeader">
                <div className="avatarName">
                    <img src="" />
                    <h2>philzcoffee</h2>
                </div>
            </div>
            <div className="postPhoto">

            </div>
            <CommentSection />


        </div>)

}

export default PostContainer;