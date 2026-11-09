import { useState, type ChangeEvent } from 'react';

function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function toCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

function ConceptsTruthOneSource() {
  const [celsius, setCelsius] = useState('0');

  function handleCelsiusChange(event: ChangeEvent<HTMLInputElement>) {
    setCelsius(event.target.value);
  }

  function handleFahrenheitChange(event: ChangeEvent<HTMLInputElement>) {
    const val = event.target.value;
    if (val === '' || Number.isNaN(Number(val))) {
      setCelsius(val);
    } else {
      setCelsius(String(toCelsius(Number(val))));
    }
  }

  const fahrenheit =
    celsius === '' || Number.isNaN(Number(celsius)) ? '' : String(toFahrenheit(Number(celsius)));

  const [calcInput, setCalcInput] = useState('');
  const [nums, setNums] = useState<readonly number[]>([1, 2, 3]);
  const sum = nums.reduce((acc, elem) => acc + elem, 0);

  function handleCalcBlur() {
    if (calcInput.trim() !== '') {
      setNums((prev) => [...prev, Number(calcInput) || 0]);
      setCalcInput('');
    }
  }

  const [notes, setNotes] = useState<readonly string[]>(['1', '2', '3', '4', '5']);
  const [editNum, setEditNum] = useState<number | null>(null);

  const editValue = editNum !== null ? (notes[editNum] ?? '') : '';

  function changeNote(event: ChangeEvent<HTMLInputElement>) {
    if (editNum === null) return;
    const nextVal = event.target.value;
    setNotes((prev) => prev.map((item, index) => (index === editNum ? nextVal : item)));
  }

  return (
    <div>
      <h2>Задача 1: Синхронизированные температуры (один источник истины)</h2>
      <div>
        <label>
          Цельсий (°C): <input type="number" value={celsius} onChange={handleCelsiusChange} />
        </label>
      </div>
      <div>
        <label>
          Фаренгейт (°F): <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
        </label>
      </div>

      <h2>Задача 2: Исправленный код подсчета суммы (без дублирования в стейт sum)</h2>
      <p>Сумма: {sum}</p>
      <input
        value={calcInput}
        onChange={(event) => setCalcInput(event.target.value)}
        onBlur={handleCalcBlur}
        placeholder="Введите число и уберите фокус"
      />

      <h2>Задача 3: Исправленный код редактирования заметок (без дублирования в стейт value)</h2>
      {notes.map((note, index) => (
        <p key={index} onClick={() => setEditNum(index)} style={{ cursor: 'pointer' }}>
          {note} {editNum === index && '← редактируется'}
        </p>
      ))}
      <input
        value={editValue}
        disabled={editNum === null}
        onChange={changeNote}
        placeholder={editNum === null ? 'Кликните по заметке выше для выбора' : 'Редактировать...'}
      />
    </div>
  );
}

export default ConceptsTruthOneSource;
