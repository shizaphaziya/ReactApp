function DataIntro() {
  return (
    <ul>
      <li>
        Добавление в массив: <code>setArr([...arr, elem])</code>
      </li>
      <li>
        Изменение элемента массива: <code>setArr(arr.map((item, i) =&gt; (i === index ? newItem : item)))</code>
      </li>
      <li>
        Удаление из массива: <code>setArr(arr.filter((item, i) =&gt; i !== index))</code>
      </li>
      <li>
        Добавление в массив объектов: <code>setArr([...arr, {'{ id, ...data }'}])</code>
      </li>
      <li>
        Изменение элемента массива объектов:{' '}
        <code>setArr(arr.map((item) =&gt; (item.id === id ? {'{ ...item, ...changes }'} : item)))</code>
      </li>
      <li>
        Удаление из массива объектов: <code>setArr(arr.filter((item) =&gt; item.id !== id))</code>
      </li>
    </ul>
  );
}

export default DataIntro;
