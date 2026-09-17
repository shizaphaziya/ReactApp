import { useState } from 'react';

function FormsInputIntro() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');

  return (
    <div>
      <input value={value1} onChange={(e) => setValue1(e.target.value)} />
      <p>{value1}</p>
      <input value={value2} onChange={(e) => setValue2(e.target.value)} />
      <p>{value2}</p>
    </div>
  );
}

export default FormsInputIntro;
