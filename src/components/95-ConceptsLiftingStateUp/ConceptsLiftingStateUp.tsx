import { useState, type ChangeEvent } from 'react';
import TempInp from './TempInp';
import Verdict from './Verdict';

function CurrencyInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label>
        {label}:{' '}
        <input
          type="number"
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        />
      </label>
    </div>
  );
}

function TermsCheckbox({
  agreed,
  onToggle,
}: {
  agreed: boolean;
  onToggle: (checked: boolean) => void;
}) {
  return (
    <label>
      <input
        type="checkbox"
        checked={agreed}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onToggle(event.target.checked)}
      />{' '}
      Согласен с правилами сервиса
    </label>
  );
}

function SubmitButton({ disabled }: { disabled: boolean }) {
  return <button disabled={disabled}>Отправить форму</button>;
}

function NoteForm({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');

  function handleSubmit() {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText('');
  }

  return (
    <div>
      <input
        value={text}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
        placeholder="Текст заметки"
      />
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  );
}

function NoteList({ notes }: { notes: readonly string[] }) {
  return (
    <div>
      <p>Всего заметок: {notes.length}</p>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

function ConceptsLiftingStateUp() {
  const [temp, setTemp] = useState<number | string>(20);

  const [rub, setRub] = useState('100');
  const usd = rub === '' ? '' : (Number(rub) / 100).toFixed(2);

  function handleRubChange(value: string) {
    setRub(value);
  }

  function handleUsdChange(value: string) {
    setRub(value === '' ? '' : String(Number(value) * 100));
  }

  const [agreed, setAgreed] = useState(false);

  const [notes, setNotes] = useState<readonly string[]>(['Заметка 1', 'Заметка 2']);

  function addNote(text: string) {
    setNotes((prev) => [...prev, text]);
  }

  return (
    <div>
      <h2>Задача 1: Калькулятор состояния воды</h2>
      <Verdict temp={temp} />
      <TempInp temp={temp} setTemp={setTemp} />

      <h2>Задача 2.1: Конвертер валют</h2>
      <CurrencyInput label="Рубли (RUB)" value={rub} onChange={handleRubChange} />
      <CurrencyInput label="Доллары (USD)" value={usd} onChange={handleUsdChange} />

      <h2>Задача 2.2: Согласие с условиями и кнопка отправки</h2>
      <div>
        <TermsCheckbox agreed={agreed} onToggle={setAgreed} />
      </div>
      <div>
        <SubmitButton disabled={!agreed} />
      </div>

      <h2>Задача 2.3: Список заметок и форма добавления</h2>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default ConceptsLiftingStateUp;
