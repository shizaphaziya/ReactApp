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
  Styling: 'Стилизация',
  Project: 'Проекты',
};

const sections = lessons.reduce<{ name: string; items: typeof lessons }[]>((groups, lesson) => {
  const last = groups.at(-1);
  if (last?.name === lesson.section) {
    return [...groups.slice(0, -1), { name: last.name, items: [...last.items, lesson] }];
  }
  return [...groups, { name: lesson.section, items: [lesson] }];
}, []);

function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <h1>Домашние задания по React</h1>
        <p>
          Автоматически найдено уроков: <strong>{lessons.length}</strong>. Выберите ДЗ — откроется отдельная
          страница с решением.
        </p>
      </section>
      {sections.map((section) => (
        <section key={section.name} className={styles.card}>
          <h2 className={styles.cardTitle}>
            {sectionTitles[section.name] ?? section.name}
            <span className={styles.count}>{section.items.length}</span>
          </h2>
          <div className={styles.grid}>
            {section.items.map((lesson) => (
              <Link key={lesson.num} to={`/${lesson.num}`} className={styles.tile}>
                <span className={styles.num}>{lesson.num}</span>
                <span className={styles.name}>{humanize(lesson.slug)}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
