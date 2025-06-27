import styles from './Header.module.css';
import Button from '../Button';
import Menu from '../Menu';

function Header() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroOverlay}></div>
            <div className={styles.menuWrapper}>
                <Menu />
            </div>
            <div className={styles.heroContent}>
                <div className={styles.heroTextContainer}>
                    <h1 className={styles.title}>Bienvenido a Karga</h1>
                    <p className={styles.heroText}>
                        La solución confiable en el Sureste de México para la instalación y mantenimiento de cargadores para vehículos eléctricos.
                    </p>
                    <a href="#form"><Button text="Contacto"/></a>
                </div>
            </div>
        </div>
    );
}

export default Header;
