import { useState } from 'react';

const initNotes = [
  { id: crypto.randomUUID(), name: 'name1', desc: 'long description 1', show: false },
  { id: crypto.randomUUID(), name: 'name2', desc: 'long description 2', show: false },
  { id: crypto.randomUUID(), name: 'name3', desc: 'long description 3', show: false },
];

function DataShowing() {
  const [notes, setNotes] = useState(initNotes);

  function toggle(id: string) {
    setNotes(notes.map((note) => (note.id === id ? { ...note, show: !note.show } : note)));
  }

  const result = notes.map((note) => (
    <p key={note.id}>
      {note.name}, {note.show && <i>{note.desc}</i>} <button onClick={() => toggle(note.id)}>{note.show ? 'hide' : 'show'}</button>
    </p>
  ));

  return <div>{result}</div>;
}

export default DataShowing;
