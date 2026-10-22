import { Link, Outlet, useMatch } from 'react-router';
import { humanize, lessons } from './lessons';
import styles from './Layout.module.css';

function Layout() {
  const match = useMatch('/:num');
  const index = lessons.findIndex((lesson) => String(lesson.num) === match?.params['num']);
  const current = lessons[index];
  const prev = lessons[index - 1];
  const next = lessons[index + 1];

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.bar}>
          <Link to="/" className={styles.brand}>
            <span className={styles.logo}>⚛</span>
            React · ДЗ
          </Link>
          {current && (
            <>
              <div className={styles.title}>
                <span className={styles.badge}>ДЗ {current.num}</span>
                <span className={styles.slug}>{humanize(current.slug)}</span>
              </div>
              <nav className={styles.nav}>
                {prev ? (
                  <Link to={`/${prev.num}`} className={styles.navLink}>
                    ← {prev.num}
                  </Link>
                ) : (
                  <span className={styles.navDisabled}>←</span>
                )}
                <Link to="/" className={styles.navLink}>
                  Все
                </Link>
                {next ? (
                  <Link to={`/${next.num}`} className={styles.navLink}>
                    {next.num} →
                  </Link>
                ) : (
                  <span className={styles.navDisabled}>→</span>
                )}
              </nav>
            </>
          )}
        </div>
      </header>
      <main className={styles.main}>
        {current ? (
          <div className={styles.lesson}>
            <Outlet />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

export default Layout;
