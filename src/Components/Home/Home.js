import React, { useEffect, useState } from 'react';
import Post from '../Posts/Post';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Home = () => {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

    return (
        <Grid container spacing={-2} item >
        <Box width="100%" bgcolor="info.main" color="info.contrastText" boxShadow={3} p={4} >
        <div>
        <Container maxWidth="sm">
             <h1> Posts</h1>
            {
                posts.map(post => <Post post={post} key ={post.id}></Post>
                )}
                </Container>
    
        </div>
        </Box>
      </Grid>
    );
};

export default Home;