import { useState } from 'react';

interface Note {
  id: string;
  prop1: string;
  prop2: string;
  prop3: string;
}

const initNotes: Note[] = [
  { id: crypto.randomUUID(), prop1: 'value11', prop2: 'value12', prop3: 'value13' },
  { id: crypto.randomUUID(), prop1: 'value21', prop2: 'value22', prop3: 'value23' },
  { id: crypto.randomUUID(), prop1: 'value31', prop2: 'value32', prop3: 'value33' },
];

function Adding() {
  const [notes, setNotes] = useState(initNotes);

  const result = notes.map((note) => (
    <li key={note.id}>
      <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>
    </li>
  ));

  return (
    <div>
      <ul>{result}</ul>
      <button
        onClick={() =>
          setNotes([...notes, { id: crypto.randomUUID(), prop1: 'value41', prop2: 'value42', prop3: 'value43' }])
        }
      >
        add
      </button>
    </div>
  );
}

function AddingFromInputs() {
  const [notes, setNotes] = useState(initNotes);
  const [prop1, setProp1] = useState('');
  const [prop2, setProp2] = useState('');
  const [prop3, setProp3] = useState('');

  const result = notes.map((note) => (
    <li key={note.id}>
      <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>
    </li>
  ));

  return (
    <div>
      <ul>{result}</ul>
      <input value={prop1} onChange={(event) => setProp1(event.target.value)} />
      <input value={prop2} onChange={(event) => setProp2(event.target.value)} />
      <input value={prop3} onChange={(event) => setProp3(event.target.value)} />
      <button onClick={() => setNotes([...notes, { id: crypto.randomUUID(), prop1, prop2, prop3 }])}>add</button>
    </div>
  );
}

function DataObjectsArrayAdding() {
  return (
    <div>
      <Adding />
      <AddingFromInputs />
    </div>
  );
}

export default DataObjectsArrayAdding;
