import { useEffect, useState } from 'react';

function HooksUseEffectIntro() {
  const [title, setTitle] = useState('Новый тайтл страницы');

  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;
    return () => {
      document.title = originalTitle;
    };
  }, [title]);

  return (
    <div>
      <p>Текущий заголовок документа (document.title) обновляется через useEffect.</p>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
    </div>
  );
}

export default HooksUseEffectIntro;
