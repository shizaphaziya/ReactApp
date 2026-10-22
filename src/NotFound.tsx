import { Link } from 'react-router';
import styles from './Home.module.css';

function NotFound() {
  return (
    <section className={styles.notFound}>
      <h1>404</h1>
      <p>Такого ДЗ ещё нет.</p>
      <Link to="/" className={styles.back}>
        К списку ДЗ
      </Link>
    </section>
  );
}

export default NotFound;
