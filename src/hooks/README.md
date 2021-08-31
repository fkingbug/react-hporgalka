Вынос логики сортирвоки и фильтрации в кастомный hook usePosts :

_Создаем папку hooks и usePosts.js_

usePosts.js:

- filter.sort изменяем на sort , так как мы принимаем сразу свойтво по которому будем сортировать

```javascript
import { useMemo } from 'react'

export const useSorted = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    console.log('Мемо сработало')
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])
}
```
