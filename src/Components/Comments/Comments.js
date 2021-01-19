import React, { useEffect, useState } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comments = (props) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`)
        .then(res=> res.json())
        .then(data => setComments(data));
    
            
    },[props.postId]);
    return (
        <div>
            {
                comments.map(comment => <CommentDetail comment={comment} key={comment.id}></CommentDetail>)
            }
        </div>
    );
};

export default Comments;