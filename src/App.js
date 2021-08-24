import React, { useState } from 'react';
import PostList from './components/posts/PostList';
import PostForm from './components/PostForm';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
