import { useState } from 'react';

type DatePart = 'year' | 'month' | 'day';

const initDate: Record<DatePart, number> = {
  year: 2025,
  month: 12,
  day: 31,
};

function FormsObjectInputsBinding() {
  const [date, setDate] = useState(initDate);

  function handleChange(prop: DatePart, value: string) {
    setDate({ ...date, [prop]: Number(value) });
  }

  const weekday = new Date(date.year, date.month - 1, date.day).toLocaleDateString('ru-RU', { weekday: 'long' });

  return (
    <div>
      <input value={date.year} onChange={(event) => handleChange('year', event.target.value)} />
      <input value={date.month} onChange={(event) => handleChange('month', event.target.value)} />
      <input value={date.day} onChange={(event) => handleChange('day', event.target.value)} />
      <p>
        {date.year}-{date.month}-{date.day}, {weekday}
      </p>
    </div>
  );
}

export default FormsObjectInputsBinding;
