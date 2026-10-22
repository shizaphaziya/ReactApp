import { useState } from 'react';

function FormsSelectIntro() {
  const [value, setValue] = useState('Москва');

  return (
    <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        <option>Москва</option>
        <option>Минск</option>
        <option>Астана</option>
        <option>Ташкент</option>
      </select>
      <p>ваш выбор: {value}</p>
    </div>
  );
}

export default FormsSelectIntro;
