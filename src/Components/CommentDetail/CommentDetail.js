import React from 'react';
import CommentRoundedIcon from '@material-ui/icons/CommentRounded';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';



const CommentDetail = (props) => {
    const {name, email, body, postId, id} = (props.comment);
    
    
    
  

    return (
        <Box width="100%" borderRadius="5%" margin="3%" bgcolor="primary.main" color="info.contrastText" boxShadow={4} p={3} >
        
         <CommentRoundedIcon> </CommentRoundedIcon>
            <ListItemText primary="Comment"/>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h4>Body: {body}</h4>
            <h4>PostId: {postId}</h4>
            <p>Id: {id}</p>
            <br/>
            <br/>
        </Box>
    );
};

export default CommentDetail;