import { useState } from 'react';

function FormsSelectValue() {
  const [value, setValue] = useState('1');

  return (
    <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        <option value="1">от 0 до 12 лет</option>
        <option value="2">от 13 до 17 лет</option>
        <option value="3">от 18 до 25 лет</option>
        <option value="4">старше 25 лет</option>
      </select>
      <p>
        {value === '1' && 'вы ребенок'}
        {value === '2' && 'вы подросток'}
        {value === '3' && 'вы молодой человек'}
        {value === '4' && 'вы взрослый'}
      </p>
    </div>
  );
}

export default FormsSelectValue;
