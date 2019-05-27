import React from 'react';
import './LikesComponent.css';
const LikeSection = props => {
    return [
        <div
            className="like-section"
            key="likes-icons-container"

        >
            <div className="like-section-wrapper"
                onClick={props.like}
            >
                <i className="fa fa-heart-o" />
            </div>
            <div className="like-section-wrapper">
                <i className="fa fa-comment-o" />
            </div>
        </div>,
        <div className="like-section" key="likes-container">
            <div className="like-section-wrapper">{props.likes}</div>
        </div>
    ];
};

export default LikeSection;