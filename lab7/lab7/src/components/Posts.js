// src/components/Posts.js
import React from 'react';
import Post from './Post';

const Posts = ({ posts, onPostClick }) => {
  return (
    
    <div className="posts">
     
      {posts.map(post => (
      <Post key={post.id} post={post} onClick={onPostClick} />
      ))}
    </div>
  );
};

export default Posts;