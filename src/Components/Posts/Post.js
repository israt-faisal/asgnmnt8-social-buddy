import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const history = useHistory();
  const handleClick= (postId) => {
  const url = `/post/${id}`;
  history.push(url);

}
const{id, title} = (props.post);
  
    return (
        <div>
            <h3>Id: {id}</h3>
            <h4>Title: {title}</h4>
            <Button onClick={()=> handleClick(id)} variant="contained" color="secondary">more info about post {id}</Button>
           
            
        </div>
    );
};

export default Post;