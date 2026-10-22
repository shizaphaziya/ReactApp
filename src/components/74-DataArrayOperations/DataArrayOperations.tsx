import { useState } from 'react';

const initNumbers = [1, 2, 3, 4, 5];
const initTexts = ['a', 'b', 'c', 'd', 'e'];

function Squares() {
  const [numbers, setNumbers] = useState(initNumbers);

  const result = numbers.map((number, index) => (
    <li key={index} onClick={() => setNumbers(numbers.map((item, i) => (i === index ? item ** 2 : item)))}>
      {number}
    </li>
  ));

  return <ul>{result}</ul>;
}

function Removing() {
  const [numbers, setNumbers] = useState(initNumbers);

  const result = numbers.map((number, index) => (
    <li key={index}>
      {number} <button onClick={() => setNumbers(numbers.filter((_, i) => i !== index))}>remove</button>
    </li>
  ));

  return <ul>{result}</ul>;
}

function Editing() {
  const [texts, setTexts] = useState(initTexts);
  const [index, setIndex] = useState<number | null>(null);
  const [value, setValue] = useState('');

  function select(i: number, text: string) {
    setIndex(i);
    setValue(text);
  }

  function save() {
    setTexts(texts.map((text, i) => (i === index ? value : text)));
  }

  const result = texts.map((text, i) => (
    <li key={i} onClick={() => select(i, text)}>
      {text}
    </li>
  ));

  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.target.value)} onBlur={save} />
      <ul>{result}</ul>
    </div>
  );
}

function Reversing() {
  const [numbers, setNumbers] = useState(initNumbers);

  return (
    <div>
      <button onClick={() => setNumbers([...numbers].reverse())}>reverse</button>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

function DataArrayOperations() {
  return (
    <div>
      <Squares />
      <Removing />
      <Editing />
      <Reversing />
    </div>
  );
}

export default DataArrayOperations;
