import { Content } from '../content';
import { Header } from '../header';

import styles from './app.module.css';

export function App() {
  return (
    <div>
      <Header />
      <Content className={styles.content} />
    </div>
  );
}
