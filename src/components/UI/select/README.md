**Select/Options/Sort**

МуSelect :

- select value и onChange чтобы сделать управляемый компонент для записи и вставки value
- option disabled value="" принимает значение defaultValue(сортировка) и его нельзя выбрать
- options.map Пробегаемся по массиву объектов и вносим в них значения

```javascript
function MySelect({ options, defaultValue, value, onChange }) {
  return (
    <select value={value} onChange={event => onChange(event.target.value)}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options &&
        options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
    </select>
  )
}
```

---

App.js

- Стейт в котором будет хранится выбраный option
- функция коорая принимает выбраный option и с методом localeCompare делает соритровку
- Вызов компонента с всеми нужными данными

```javascript
const [selectedSort, setSelectedSort] = useState('')
const sortPosts = sort => {
  setSelectedSort(sort)
  //массив постов ↓
  setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
}
return (
  <Myselect
    value={selectedSort}
    onChange={sortPosts}
    defaultValue="Сортировка"
    options={[
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По описанию' },
    ]}
  />
)
```

---
