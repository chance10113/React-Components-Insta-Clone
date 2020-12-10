import React from 'react';
import dummyData from '../../dummy-data';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
// console.log('dumD',dummyData)
// console.log('posts', posts)
// console.log(Post)
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
       {posts.map((post) => {
        return (
           < Post post = {post}  key= {post.id} likePost = {likePost} />
       )})}
      
    </div>
  );
};

export default Posts;
// console.log(Posts)