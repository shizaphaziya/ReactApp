import { useState } from 'react';

function DataArrayAdding() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [notes, setNotes] = useState(['a', 'b', 'c']);
  const [value, setValue] = useState('');

  return (
    <div>
      <div>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <button onClick={() => setNumbers([...numbers, numbers.length + 1])}>add</button>
      </div>
      <div>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
        <input value={value} onChange={(event) => setValue(event.target.value)} />
        <button onClick={() => setNotes([...notes, value])}>add</button>
      </div>
    </div>
  );
}

export default DataArrayAdding;
