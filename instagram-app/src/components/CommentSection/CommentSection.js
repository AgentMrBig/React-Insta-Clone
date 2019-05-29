import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

import './CommentSection.css'

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  componentWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = e => {
    console.log(e.target)
    this.setState({ comment: e.target.value });
  }

  submitComment = e => {
    e.preventDefault();
    let curUser

    if (localStorage.getItem('user')) {
      curUser = localStorage.getItem('user');
    } else {
      console.log('localStorage.getItem(user) ' + localStorage.getItem('user'));
    }
    const newComment = {
      text: this.state.comment, username: localStorage.getItem(
        'user'
      )
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
    setTimeout(() => {
      this.setComments();
    }, 500);
  }

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <hr />
        <CommentInput
          comment={this.state.comment}
          submitComment={this.submitComment}
          changeComment={this.commentHandler}
        />
      </div>

    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;