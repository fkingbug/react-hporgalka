axios для запросов

запрос на сервер :

```javascript
async function fetchPosts() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  setPosts(response.data)
}
```

**useEffect** - служит для монтирания ЖЦ компонента

- useEffect(callback , массив зависимостей при изменение которых он будет срабатывать , если он пуст , то сработает при обновлении страниц)

```javascript
useEffect(() => {
  fetchPosts()
}, [])
```

для удобной работы с API нужно сделать Api > PostService.js
_на уровне сервиса не стоит отлавливать ошибки лучше обрабатывать ее вне_

```javascript
export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      return response.data
    } catch (error) {
      console.error(error)
    }
  }
}
```

app.js

```javascript
async function fetchPosts() {
  const post = await PostService.getAll()
  setPosts(post)
}
```
