import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';

const Posts = () => {
   const posts = useSelector((state) => state.posts);
   const classes = useStyles();
   console.log(posts);
   return (
      <>
         <h1 className={classes.Posts}>Posts</h1>
         {posts.map((post) => 'map post')}

         <Post />
         <Post />
      </>
   );
};

export default Posts;
