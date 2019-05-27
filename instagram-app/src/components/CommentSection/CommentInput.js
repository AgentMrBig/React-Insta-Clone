import React from 'react';
import './CommentSection.css'

const CommentInput = props => {
    return (
        <form onSubmit={props.submitComment}>
            <input
                className="commentInput"
                type="text"
                value={props.comment}
                placeholder="Add comment... "
                onChange={props.changeComment}
            />
            <span className="options"><strong>. . .</strong></span>
        </form>
    );
};

export default CommentInput;