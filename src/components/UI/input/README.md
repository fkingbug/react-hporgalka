app.js :

```javascript
  const [title, setTitle] = useState(''); //стейт для упраляемого компонента
  const bodyInputRef = useRef(); // реф для неуправляемого компонента

  const addNewPost = (e) => {
    e.preventDefault(); // button в состояние submit и перезагружает страницу , мы не перезагружаем страницу после этого
    console.log(title);
    console.log(bodyInputRef.current.value);//вывод содержимого в реф
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
        <input ref={bodyInputRef} type="text" />
        {/* <MyInput type="text" placeholder="Описание поста" /> */}
        {/* <MyButton disabled>Создать пост</MyButton> Для блокировки кнопки {...props} принимает все*/}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
```

Myinput компонент :

```javascript
import React from 'react';
import classes from './MyInput.module.css';

const MyInput = (props) => {
  return <input className={classes.myInput} {...props} />;
};

export default MyInput;
```

---

Создание управляемого инпута :

Для этого необходимо создать

- стейт в котором будет храниться велью инпута
- Присвоить value инпута значение из стетай (title)
- на onChange повесить функцию которая будет помещать в в стейт значение инпута

```javascript
const [title, setTitle] = useState('');

<MyInput
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  type="text"
  placeholder="Название поста"
/>;
```

---

Для создания неупраляемого компонента нужно создать ref

- Создание ref в переменной bodyInputRef
- передача в input информации , что за ним следит ref
- Мы не можем передать таким образом в компонент MyInput ref , так реакт не понимаем к чему передается это ссылка

```javascript
const bodyInputRef = useRef()
<input ref={bodyInputRef} type="text" />
```

обращеник ref :

```javascript
console.log(bodyInputRef.current.value);
```

MyInput передача ref :

- оборачиваем компонент в React.forwardRef и параметром передаем ref

```javascript
import React from 'react';
import classes from './MyInput.module.css';

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={classes.myInput} {...props} />;
});

export default MyInput;
```

Передача в компонент ref :

```javascript
<MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" />
```

---

Мини ToDo :

- Создание стейта (массив объектов постов)
- Сосздание 2 стейта для 2 импутов (title , body)
- addNewPost функция которая при клике берет данные из title , body , помещает их в объект и добавляет их в стейт с объектами ([...posts, newPost] берем старое значение и добавляем новое)

```javascript
function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
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
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Список постов 1" />
    </div>
  );
}
```