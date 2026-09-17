import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

interface LessonModule {
  num: number;
  name: string;
  Component: React.ComponentType;
}

function getLessons(): LessonModule[] {
  try {
    const context = require.context('./components', true, /\.(tsx|jsx)$/);
    const keys = context.keys();
    const map: Record<number, LessonModule> = {};

    keys.forEach((key: string) => {
      const match = key.match(/\.\/(\d+)-([^/]+)\/([^/]+)\.tsx$/);
      if (!match) return;

      const num = parseInt(match[1], 10);
      const name = match[2];
      const mod = context(key);
      const Component = mod.default || mod[name] || Object.values(mod).find((v) => typeof v === 'function');

      if (Component && !map[num]) {
        map[num] = {
          num,
          name,
          Component: Component as React.ComponentType,
        };
      }
    });

    return Object.values(map).sort((a, b) => a.num - b.num);
  } catch {
    return [];
  }
}

const lessons = getLessons();

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const match = currentPath.match(/^\/(\d+)\/?$/);
  const lessonNum = match ? parseInt(match[1], 10) : null;

  if (lessonNum !== null) {
    const lesson = lessons.find((l) => l.num === lessonNum);
    if (lesson) {
      const LessonComp = lesson.Component;
      return <LessonComp />;
    }
    return <div>ДЗ {lessonNum} не найдено</div>;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Выбор ДЗ</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {lessons.map((lesson) => (
          <button
            key={lesson.num}
            onClick={() => {
              window.history.pushState(null, '', `/${lesson.num}`);
              setCurrentPath(`/${lesson.num}`);
            }}
            style={{
              padding: '8px 14px',
              fontSize: '14px',
              cursor: 'pointer',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: '#fff',
            }}
          >
            ДЗ {lesson.num}
          </button>
        ))}
      </div>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

export default App;
