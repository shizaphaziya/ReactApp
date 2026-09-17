import { useState } from 'react';

function StatesUsing() {
  const [name] = useState('john');
  const [surname] = useState('smit');
  const [age] = useState(30);

  return (
    <div>
      <p>{name}</p>
      <p>{surname}</p>
      <p>{age}</p>
    </div>
  );
}

export default StatesUsing;
