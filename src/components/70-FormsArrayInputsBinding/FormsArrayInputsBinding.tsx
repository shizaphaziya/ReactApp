import { useState } from 'react';

function getAverage(arr: string[]): number {
  return arr.reduce((sum, elem) => sum + Number(elem), 0) / arr.length;
}

function FormsArrayInputsBinding() {
  const [notes, setNotes] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9']);

  function changeHandler(index: number, value: string) {
    setNotes([...notes.slice(0, index), value, ...notes.slice(index + 1)]);
  }

  const result = notes.map((note, index) => (
    <input key={index} value={note} onChange={(event) => changeHandler(index, event.target.value)} />
  ));

  return (
    <div>
      {result}
      <p>{getAverage(notes)}</p>
    </div>
  );
}

export default FormsArrayInputsBinding;
