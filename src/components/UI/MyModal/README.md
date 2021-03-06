Модальное окно
**МОЖНО СДЕЛАТЬ РЕФАМИ**

MyModal.jsx :

```javascript
import React from 'react'
import cl from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
  const rootClasses = [cl.myModal]
  if (visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal
```

Добавляем проп - children , чтобы мы могли обернуть нушу форму в appjs
в MyModal {children} = _PostForm create={createPost}_

```javascript
const MyModal = ({ children }) => {}

//app.js
;<MyModal visible={modal} setVisible={setModal}>
  <PostForm create={createPost} />
</MyModal>
```

открытие и закрытие modal :

prop visible полученные из app.js отвечает за открытие и закрыте модального окна
если true то добавляй к классу класс актив

```javascript
const rootClasses = [cl.myModal]
if (visible) {
  rootClasses.push(cl.active)
}
```

Клик и по темной области для закрытия окнаЖ

```javascript
return (
  <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
    //клик по темной области меняет стейт
    <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
      //не делает этого
      {children}
    </div>
  </div>
)
```

---

App.js

```javascript
import React, { useState, useMemo } from 'react'
import PostList from './components/posts/PostList'
import PostForm from './components/PostForm'

import './styles/App.css'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/MyModal/MyModal'
import MyButton from './components/UI/button/MyButton'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'cc' },
    { id: 3, title: 'bb', body: 'bb' },
    { id: 2, title: 'cc', body: 'aa' },
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false) //стейт для модалки

  const sortedPosts = useMemo(() => {
    console.log('Мемо сработало')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  const createPost = newPost => {
    setPosts([...posts, newPost])
    setModal(false) //закрытие модалки после создание поста
  }

  const removePost = post => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
    </div>
  )
}

export default App
```
