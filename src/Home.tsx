import { Link } from 'react-router';
import { humanize, lessons } from './lessons';
import styles from './Home.module.css';

const sectionTitles: Record<string, string> = {
  Basis: 'Основы',
  Jsx: 'Язык JSX',
  Conditions: 'Условия',
  Functions: 'Функции',
  Forming: 'Формирование тегов',
  Id: 'Уникальные id',
  States: 'Стейты',
  Forms: 'Формы',
  Data: 'Данные',
  Components: 'Компоненты',
  Concepts: 'Концепции',
  Hooks: 'Хуки',
  Styling: 'Стилизация',
  Project: 'Проекты',
};

const sections = lessons.reduce<
  { key: string; name: string; book: 'prime' | 'supreme'; items: typeof lessons }[]
>((groups, lesson) => {
  const groupKey = `${lesson.book}-${lesson.section}`;
  const last = groups.at(-1);
  if (last?.key === groupKey) {
    return [...groups.slice(0, -1), { ...last, items: [...last.items, lesson] }];
  }
  return [...groups, { key: groupKey, name: lesson.section, book: lesson.book, items: [lesson] }];
}, []);

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <h1>Домашние задания по React</h1>
        <p>
          Автоматически найдено уроков: <strong>{lessons.length}</strong>. Выберите ДЗ: откроется отдельная
          страница с решением, а иконка ↗ ведёт на оригинальный урок на code.mu.
        </p>
      </section>
      {sections.map((section) => (
        <section key={section.key} className={styles.card}>
          <h2 className={styles.cardTitle}>
            {section.book === 'supreme' ? 'Высший учебник · ' : ''}
            {sectionTitles[section.name] ?? section.name}
            <span className={styles.count}>{section.items.length}</span>
          </h2>
          <div className={styles.grid}>
            {section.items.map((lesson) => (
              <div key={lesson.id} className={styles.tileWrapper}>
                <Link to={`/${lesson.path}`} className={styles.tile}>
                  <span className={styles.num}>
                    {lesson.book === 'supreme' ? `S${lesson.num}` : lesson.num}
                  </span>
                  <span className={styles.name}>{humanize(lesson.slug)}</span>
                </Link>
                <a
                  href={lesson.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tileExternal}
                  title="Оригинальный урок на code.mu"
                  aria-label="Оригинальный урок на code.mu"
                >
                  ↗
                </a>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
