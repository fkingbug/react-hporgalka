import React, { useRef, useState } from 'react';
import PostList from './components/posts/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault(); // button в состояние submit и перезагружает страницу , мы не перезагружаем страницу после этого
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    console.log(newPost);
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
          placeholder="Описание поста"
        />
        {/* <input ref={bodyInputRef} type="text" /> */}
        {/* <MyButton disabled>Создать пост</MyButton> Для блокировки кнопки {...props} принимает все*/}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}

export default App;
