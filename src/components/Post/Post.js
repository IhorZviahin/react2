import React from 'react';
import {Link, useLocation} from "react-router-dom";

const Post = ({post}) => {

    const {id, title, body} = post
    return (
        <div>
            <h3>
                {id}--{title}
            </h3>
            <div>{body}</div>
            <button>
                <Link to={id.toString()} state={post}> Details </Link>
            </button>
            <hr/>
        </div>
    );
};

export {Post};