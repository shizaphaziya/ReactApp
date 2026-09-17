import { useState } from 'react';

function FormsInputSeveral() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [num5, setNum5] = useState(0);

  const average = (num1 + num2 + num3 + num4 + num5) / 5;

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} />
      <input type="number" value={num3} onChange={(e) => setNum3(Number(e.target.value))} />
      <input type="number" value={num4} onChange={(e) => setNum4(Number(e.target.value))} />
      <input type="number" value={num5} onChange={(e) => setNum5(Number(e.target.value))} />
      <p>{average}</p>
    </div>
  );
}

export default FormsInputSeveral;
