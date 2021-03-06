import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Comments from '../Comments/Comments';
import Container from '@material-ui/core/Container';




const PostDetail = () => {
  const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=> res.json())
        .then(data => setPost(data));
    },[postId]);

 
    const useStyles = makeStyles({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
          textAlign: 'center',
        },
      });
        const classes = useStyles();
        
        
        

    return (
        <div> 
           <div>
             <h1 className={classes.root}> Post Detail of ID- {postId} </h1>
             </div>
             <Container maxWidth="sm">
           <h2>UserID : {post.userId}</h2>
           <h2>Title : {post.title}</h2>
           <h3>Body : {post.body}</h3>
           <br/>
           <br/>
           
          <Comments postId={postId}></Comments>
          </Container>

      
        </div>
    )};

export default PostDetail;