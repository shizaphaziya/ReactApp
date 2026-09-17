import { useState } from 'react';

function StatesReactivity() {
  const [name, setName] = useState('john');
  const [surname, setSurname] = useState('smit');

  return (
    <div>
      <p>{name}</p>
      <p>{surname}</p>
      <button onClick={() => setName('eric')}>change name</button>
      <button onClick={() => setSurname('brown')}>change surname</button>
    </div>
  );
}

export default StatesReactivity;
