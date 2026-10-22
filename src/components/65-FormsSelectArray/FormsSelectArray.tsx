import { useState } from 'react';

const cities = ['Москва', 'Минск', 'Астана', 'Ташкент'];

function FormsSelectArray() {
  const [value, setValue] = useState(cities[0]);

  const options = cities.map((city, index) => <option key={index}>{city}</option>);

  return (
    <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        {options}
      </select>
      <p>ваш выбор: {value}</p>
    </div>
  );
}

export default FormsSelectArray;
