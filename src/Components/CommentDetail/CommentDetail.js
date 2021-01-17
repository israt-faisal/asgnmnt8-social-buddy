import React, { useEffect, useState } from 'react';

const CommentDetail = (props) => {
    const {name, email, body, postId, id} = (props.comment);
    const [detailCom, setDetailCom] = useState([]);
    useEffect(()=>{
        fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setDetailCom(data))
    }, [postId]);
    

    return (
        <div>
            <br/>
            <h1>Comments</h1>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h4>Body: {body}</h4>
            <h4>PostId: {postId}</h4>
            <p>Id: {id}</p>
        </div>
    );
};

export default CommentDetail;