import { useState } from 'react';

const texts = ['text1', 'text2', 'text3', 'text4'];

function FormsSelectArrayValue() {
  const [value, setValue] = useState('0');

  const options = texts.map((text, index) => (
    <option key={index} value={index}>
      {text}
    </option>
  ));

  return (
    <div>
      <select value={value} onChange={(event) => setValue(event.target.value)}>
        {options}
      </select>
      <p>ваш выбор: {texts[Number(value)]}</p>
    </div>
  );
}

export default FormsSelectArrayValue;
