import { useState } from 'react';

function getDigitsSum(num: string): number {
  return num
    .replace(/\D/g, '')
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

function getDivisorsProduct(num: number): number {
  let product = 1;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      product *= i;
    }
  }
  return product;
}

function FormsData() {
  const today = new Date().toISOString().slice(0, 10);

  const [value1, setValue1] = useState('0');
  const [value2, setValue2] = useState('0');
  const [result, setResult] = useState(0);

  const [date1, setDate1] = useState(today);
  const [date2, setDate2] = useState(today);
  const [days, setDays] = useState(0);

  const [digits, setDigits] = useState('');
  const [digitsSum, setDigitsSum] = useState(0);

  const [divisors, setDivisors] = useState('');
  const [divisorsProduct, setDivisorsProduct] = useState(0);

  function handleDays() {
    const diff = Math.abs(new Date(date2).getTime() - new Date(date1).getTime());
    setDays(Math.round(diff / 86400000));
  }

  return (
    <div>
      <div>
        <input value={value1} onChange={(event) => setValue1(event.target.value)} />
        <input value={value2} onChange={(event) => setValue2(event.target.value)} />
        <button onClick={() => setResult(Number(value1) + Number(value2))}>sum</button>
        <button onClick={() => setResult(Number(value1) * Number(value2))}>product</button>
        <p>result: {result}</p>
      </div>
      <div>
        <input type="date" value={date1} onChange={(event) => setDate1(event.target.value)} />
        <input type="date" value={date2} onChange={(event) => setDate2(event.target.value)} />
        <button onClick={handleDays}>days</button>
        <p>days: {days}</p>
      </div>
      <div>
        <input
          value={digits}
          onChange={(event) => setDigits(event.target.value)}
          onBlur={() => setDigitsSum(getDigitsSum(digits))}
        />
        <p>digits sum: {digitsSum}</p>
      </div>
      <div>
        <input
          value={divisors}
          onChange={(event) => setDivisors(event.target.value)}
          onBlur={() => setDivisorsProduct(getDivisorsProduct(Number(divisors)))}
        />
        <p>divisors product: {divisorsProduct}</p>
      </div>
    </div>
  );
}

export default FormsData;
