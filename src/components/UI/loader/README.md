**Loader**

```javascript
import React from 'react'

import cl from './Loader.module.css'

const Loader = () => {
  return <div className={cl.loader}></div>
}

export default Loader
```

```css
.loader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px dashed teal;
  animation: rotate 1s infinite linear; // постоянное вращение пока компонент не пропадет
}

@keyframes rotate {
  from {
    //стартовое положение окружности
    transform: rotate(0deg) scale(1);
  }
  to {
    финальное положение окружности ( под конец анимации увеличивается и крутится всегда)
    transform: rotate(360deg) scale(1.4);
  }
}
```

app.js
\*добавили состояние для лоадера (если false - его нету и показываются посты , если он есть то постов нету)

```javascript
const [isPostLoading, setIsPostLoading] = useState(false)

async function fetchPosts() {
  setIsPostLoading(true)
  setTimeout(async () => {
    const post = await PostService.getAll()
    setPosts(post)
    setIsPostLoading(false)
  }, 1000)
}
{
  isPostLoading ? (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Loader />
    </div>
  ) : (
    <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
  )
}
```
