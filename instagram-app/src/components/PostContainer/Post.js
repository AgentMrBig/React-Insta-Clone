import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './Post.css';
import './PostHeader.css';

import '../PostContainer/PostContainer.css';




const Post = props => {
  return (
    // Post header start
    <div className="post-border">
      <div className="post-header">
        <div className="post-photo"> 
            <img src={props.post.thumbnailUrl} alt="" id="post-thumb" className="post-thumb" height="200" />
        </div>
        <div className="avatar-name">
            {props.post.username}
            
        </div>
      </div>
    {/* Post header end */}
    
       
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;