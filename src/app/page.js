import styles from './page.module.css';
import Header from './components/Header'
import Us from './components/Us'
import Coverage from './components/Coverage';
import Service from './components/Service';

export default function Home() {
  return (
    <main>
      <Header />
      <Us />
      <Coverage />
      <Service />
    </main>
  );
}