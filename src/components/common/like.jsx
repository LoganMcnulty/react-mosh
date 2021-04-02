import React, { Component } from 'react';

class Like extends Component {
    render() {
        const {content:movie, onLike} = this.props

        return (
        <React.Fragment>
            <button 
                className="btn btn-transparent"
                onClick={() => onLike(movie)}
                style={{
                    outline: 'none',
                    border: 'none !important',
                    'WebkitBoxShadow': 'none !important',
                    'BoxShadow':'none !important',
                    'MozBoxShadow':'none !important'
                }}
            >
                <span className={this.checkLiked(movie)}></span>
            </button>
        </React.Fragment>
        );
    }

    checkLiked = (movie) => {
        let classes = "fa fa-heart";
        classes += (movie.liked) ? "-o" : "";
        return classes;
    }
}
export default Like;