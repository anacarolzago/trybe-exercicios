import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Post from '../components/Post';
// import { posts } from '../data';
import { PostType } from '../types';
import '../styles/Posts.css';

export default function Posts() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}/posts`)
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, [id]);

  return (
    <div data-testid="posts-page">
      <Header />
      <h1>Posts</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <Post key={ post.id } postData={ post } />
        ))}
      </div>
    </div>
  );
}
