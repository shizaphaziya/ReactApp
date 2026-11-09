import { useEffect, useState } from 'react';

function HooksUseEffectDependencies() {
  const [name, setName] = useState(() => localStorage.getItem('userName') ?? '');

  useEffect(() => {
    localStorage.setItem('userName', name);
  }, [name]);

  return (
    <div>
      <p>Имя пользователя сохраняется в localStorage при каждом изменении стейта:</p>
      <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Введите имя..." />
      <p>
        Значение в localStorage (ключ <code>userName</code>): <strong>{name}</strong>
      </p>
    </div>
  );
}

export default HooksUseEffectDependencies;
