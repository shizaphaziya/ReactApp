import { useEffect, useState, type MouseEvent } from 'react';

const colors = ['#f0fdf4', '#eff6ff', '#fef2f2', '#fefce8', '#faf5ff', '#ecfeff'];

function HooksUseEffectGlobalHandlers() {
  const [colorIndex, setColorIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleWindowClick() {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function handleOutsideClick() {
      setIsOpen(false);
    }

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  function handleToggleOpen(event: MouseEvent<HTMLAnchorElement>) {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <h2>Задача 1: Изменение фона по клику в любое место страницы</h2>
      <div
        style={{
          padding: '16px',
          backgroundColor: colors[colorIndex],
          border: '1px solid #cbd5e1',
          borderRadius: '8px',
          marginBottom: '24px',
        }}
      >
        <p>Кликните в любое место страницы, чтобы сменить цвет фона этого блока.</p>
        <p>Текущий цвет: {colors[colorIndex]}</p>
      </div>

      <h2>Задача 2: Блок, открывающийся по ссылке и скрывающийся по клику на окно</h2>
      <div>
        <a href="#toggle" onClick={handleToggleOpen} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          {isOpen ? 'Скрыть блок' : 'Показать всплывающий блок'}
        </a>
      </div>

      {isOpen && (
        <div
          onClick={(event) => event.stopPropagation()}
          style={{
            marginTop: '12px',
            padding: '16px',
            background: '#ffffff',
            border: '2px solid #2563eb',
            borderRadius: '8px',
            display: 'inline-block',
          }}
        >
          <p>Этот блок открылся по клику на ссылку.</p>
          <p>Кликните в любое место окна браузера за пределами этого блока, чтобы скрыть его.</p>
        </div>
      )}
    </div>
  );
}

export default HooksUseEffectGlobalHandlers;
