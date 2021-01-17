import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetail from '../CommentDetail/CommentDetail';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=> res.json())
        .then(data => setComments(data));
    
            
    },[]);
    return (
        <div>
            {
                comments.map(comment => <CommentDetail comment={comment} key={comment.id}></CommentDetail>)
            }
        </div>
    );
};

export default Comments;