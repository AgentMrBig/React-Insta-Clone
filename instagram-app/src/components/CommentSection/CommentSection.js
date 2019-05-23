import React from 'react';
import ReactDOM from 'react-dom';

import './CommentSection.css'

const CommentSection = props => {
    return (
        <div className="commentSection">
            <div className="iconsLikes">
                <i className="fa fa-heart-o" >
                    <div className="numLikesOutput">
                        154
                    </div>
                </i>
                <i className="fa fa-comment-o" >
                    <div className="numLikesOutput">
                        35
                    </div>
                </i>



            </div>
            <div className="comments">
                SomeDude: This is a test comment!

                <div className="lastPostTime">
                    <span id="lastPostTime"><h5>2 HOURS AGO</h5></span>
                </div>

                <hr />
                <input id="commentInput" type="text" className="commentInput" placeholder="Add a comment..." />
                <i className="fa fa-ellipsis-h options" aria-hidden="true"></i>
            </div>
        </div>)

}

export default CommentSection;