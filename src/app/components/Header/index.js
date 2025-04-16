import styles from './Header.module.css';
import Button from '../Button';
import Menu from '../Menu';

function Header() {
    return <div className={styles.heroSection}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                <Menu></Menu>
                <div className={styles.heroTextContainer}>
                    <p className={styles.heroText}>
                    Bienvenido a Karga, tu solución confiable para la instalación de cargadores de vehículos eléctricos.
                    </p>
                    <Button text="Presiona"/>
                </div>
                </div>
            </div>
}

export default Header