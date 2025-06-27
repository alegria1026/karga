import styles from './page.module.css';
import Header from './components/Header'
import Us from './components/Us'
import Coverage from './components/Coverage';
import Service from './components/Service';
import Installation from './components/Installation';
import Form from './components/Form';
import Brand from './components/Brand';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Us />
      <Coverage />
      <Service />
      <Installation />
      <Brand />
      <Form />
      <Footer />
    </main>
  );
}