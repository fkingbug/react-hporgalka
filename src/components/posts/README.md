React Transition Group : https://reactcommunity.org/react-transition-group/

npm install react-transition-group --save

yarn add react-transition-group

Оборачиваем рендер постов(posts.map) в TransitionGroup , а сами посты в CSSTransition
_key={post.id} из PostItem нужно передать в CSSTransition и задать классname для ситлей_

```javascript
<TransitionGroup>
  {posts.map((post, index) => (
    <CSSTransition key={post.id} timeout={500} classNames="post">
      <PostItem remove={remove} number={index + 1} post={post} />
    </CSSTransition>
  ))}
</TransitionGroup>
```

_пост смещается и вызежает при добавлении_
Стили

```css
.post-enter {
  transform: translateX(-350px);
}
.post-enter-active {
  transform: translateX(0px);
  transition: all 500ms ease-in;
}
.post-exit {
  opacity: 1;
}
.post-exit-active {
  transform: translateX(-350px);
  transition: all 500ms ease-in;
}
```
