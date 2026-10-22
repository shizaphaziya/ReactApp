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

function Removing() {
  const [notes, setNotes] = useState(initNotes);

  const result = notes.map((note) => (
    <li key={note.id}>
      <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>{' '}
      <button onClick={() => setNotes(notes.filter((item) => item.id !== note.id))}>remove</button>
    </li>
  ));

  return <ul>{result}</ul>;
}

function Editing() {
  const [notes, setNotes] = useState(initNotes);
  const [editId, setEditId] = useState<string | null>(null);
  const [prop1, setProp1] = useState('');
  const [prop2, setProp2] = useState('');
  const [prop3, setProp3] = useState('');

  function select(note: Note) {
    setEditId(note.id);
    setProp1(note.prop1);
    setProp2(note.prop2);
    setProp3(note.prop3);
  }

  function save() {
    setNotes(notes.map((note) => (note.id === editId ? { ...note, prop1, prop2, prop3 } : note)));
  }

  const result = notes.map((note) => (
    <li key={note.id}>
      <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>{' '}
      <button onClick={() => select(note)}>edit</button>
    </li>
  ));

  return (
    <div>
      <input value={prop1} onChange={(event) => setProp1(event.target.value)} />
      <input value={prop2} onChange={(event) => setProp2(event.target.value)} />
      <input value={prop3} onChange={(event) => setProp3(event.target.value)} />
      <button onClick={save}>save</button>
      <ul>{result}</ul>
    </div>
  );
}

function DataObjectsArrayOperations() {
  return (
    <div>
      <Removing />
      <Editing />
    </div>
  );
}

export default DataObjectsArrayOperations;
