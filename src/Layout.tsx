import { Link, Outlet, useLocation } from 'react-router';
import { humanize, lessons } from './lessons';
import styles from './Layout.module.css';

function Layout() {
  const { pathname } = useLocation();
  const base = import.meta.env.BASE_URL.replace(/^\/+|\/+$/g, '');
  let relPath = pathname.replace(/^\/+|\/+$/g, '');
  if (base && relPath.startsWith(base)) {
    relPath = relPath.slice(base.length).replace(/^\/+|\/+$/g, '');
  }

  const index = lessons.findIndex((l) => l.path === relPath || l.aliases.includes(relPath));
  const current = lessons[index];
  const prev = lessons[index - 1];
  const next = lessons[index + 1];

  const badgeText = current
    ? current.book === 'supreme'
      ? `Supreme · ДЗ ${current.num}`
      : `ДЗ ${current.num}`
    : '';

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
                <span className={styles.badge}>{badgeText}</span>
                <span className={styles.slug}>{humanize(current.slug)}</span>
              </div>
              <nav className={styles.nav}>
                {prev ? (
                  <Link to={`/${prev.path}`} className={styles.navLink}>
                    ← {prev.book === 'supreme' ? `S${prev.num}` : prev.num}
                  </Link>
                ) : (
                  <span className={styles.navDisabled}>←</span>
                )}
                <Link to="/" className={styles.navLink}>
                  Все
                </Link>
                {next ? (
                  <Link to={`/${next.path}`} className={styles.navLink}>
                    {next.book === 'supreme' ? `S${next.num}` : next.num} →
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
