import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import LikesComponent from './LikesComponent';

import '../PostContainer/PostContainer.css';
import './Post.css';
import './PostHeader.css';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  like = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  }

  render() {
    return (
      // Post header start
      <div className="post-border">
        <div className="post-header">
          <div className="post-photo">
            <img src={this.props.post.thumbnailUrl} alt="" id="post-thumb" className="post-thumb" height="200" />
          </div>
          <div className="avatar-name">
            {this.props.post.username}

          </div>
        </div>
        {/* Post header end */}


        <div className="post-image-wrapper">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <LikesComponent
          like={this.like}
          likes={this.state.likes}
        />

        <CommentSection comments={this.props.post.comments} postId={this.props.post.imageUrl} />
      </div>
    );
  }

};

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;