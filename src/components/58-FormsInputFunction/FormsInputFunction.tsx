import { useState } from 'react';

function FormsInputFunction() {
  const [age, setAge] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - Number(age);
  const celsius = ((Number(fahrenheit) - 32) * 5) / 9;

  return (
    <div>
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <p>{birthYear}</p>
      <input value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} />
      <p>{celsius}</p>
    </div>
  );
}

export default FormsInputFunction;
