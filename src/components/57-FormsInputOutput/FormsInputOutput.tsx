import { useState } from 'react';

function FormsInputOutput() {
  const [value, setValue] = useState('');

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>{value.length}</p>
    </div>
  );
}

export default FormsInputOutput;
