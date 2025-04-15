import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope as farEnvelope,
  faClipboard as farClipboard,
  faCalendarAlt as farCalendarAlt,
  faHardHat,
  faUserCog
} from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';
import Button from './components/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero section con imagen de fondo */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        
        {/* Contenido del hero */}
        <div className={styles.heroContent}>
          <nav className={styles.navbar}>
            <h1 className={styles.logo}>KARGA</h1>
            <div className={styles.navLinks}>
              <a href="#" className={styles.navLink}>Home</a>
              <a href="#" className={styles.navLink}>Servicios</a>
              <a href="#" className={styles.navLink}>Portafolio</a>
              <a href="#" className={styles.navLink}>Contacto</a>
            </div>
          </nav>

          <div className={styles.heroTextContainer}>
            <p className={styles.heroText}>
              Bienvenido a Karga, tu solución confiable para la instalación de cargadores de vehículos eléctricos.
            </p>
            <Button text="Presiona"/>
          </div>
        </div>
      </div>

      {/* Sección de proceso - Debajo del hero */}
      <section className={styles.processSection}>
        <h2 className={styles.processTitle}>Conoce nuestro proceso de instalación</h2>
        <p className={styles.processSubtitle}>Se basa en cinco etapas</p>
        
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <FontAwesomeIcon icon={farEnvelope} className={styles.stepIcon} />
            <h3>SOLICITUD</h3>
          </div>
          <div className={styles.step}>
            <FontAwesomeIcon icon={farClipboard} className={styles.stepIcon} />
            <h3>ASESORÍA Y EVALUACIÓN</h3>
          </div>
          <div className={styles.step}>
            <FontAwesomeIcon icon={farCalendarAlt} className={styles.stepIcon} />
            <h3>PROGRAMACIÓN</h3>
          </div>
          <div className={styles.step}>
            <FontAwesomeIcon icon={faHardHat} className={styles.stepIcon} />
            <h3>INSTALACIÓN Y CONEXIÓN</h3>
          </div>
          <div className={styles.step}>
            <FontAwesomeIcon icon={faUserCog} className={styles.stepIcon} />
            <h3>PUESTA EN MARCHA Y CAPACITACIÓN</h3>
          </div>
        </div>
      </section>
    </div>
  );
}