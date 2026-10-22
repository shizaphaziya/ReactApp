import { useState } from 'react';

const languages = ['HTML', 'CSS', 'JavaScript', 'PHP'];

function FormsRadio() {
  const [value, setValue] = useState('1');
  const [language, setLanguage] = useState('JavaScript');

  return (
    <div>
      <div>
        <input type="radio" name="number" value="1" checked={value === '1'} onChange={(event) => setValue(event.target.value)} />
        <input type="radio" name="number" value="2" checked={value === '2'} onChange={(event) => setValue(event.target.value)} />
        <input type="radio" name="number" value="3" checked={value === '3'} onChange={(event) => setValue(event.target.value)} />
        <p>{value}</p>
      </div>
      <div>
        {languages.map((item) => (
          <label key={item}>
            <input
              type="radio"
              name="language"
              value={item}
              checked={language === item}
              onChange={(event) => setLanguage(event.target.value)}
            />
            {item}
          </label>
        ))}
        <p>{language}</p>
        {language === 'JavaScript' && <p>отличный выбор!</p>}
      </div>
    </div>
  );
}

export default FormsRadio;
