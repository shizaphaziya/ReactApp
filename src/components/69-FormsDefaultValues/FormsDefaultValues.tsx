import { useState } from 'react';

function FormsDefaultValues() {
  const [value] = useState('text');
  const [checked] = useState(true);

  return (
    <div>
      <input defaultValue={value} />
      <input type="checkbox" defaultChecked={checked} />
    </div>
  );
}

export default FormsDefaultValues;
