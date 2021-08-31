Вынос логики сортирвоки и фильтрации в кастомный hook usePosts :

_Создаем папку hooks и usePosts.js_

usePosts.js:

- filter.sort изменяем на sort , так как мы принимаем сразу свойтво по которому будем сортировать
- хук отправляет отсортированный массив и отфильрованный по инпуту
- при вызове хука мы объявляем константу в которой будет храниться массив и usePosts(3 аргумента)

```javascript
import { useMemo } from 'react'

//сортируем посты по щначению
export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])
  return sortedPosts
}
//инпут фильтруем
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort) //вызываем нашу функцию выше
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])

  return sortedAndSearchedPosts
}
```
