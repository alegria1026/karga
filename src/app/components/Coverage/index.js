import ButtonSecundary from "../ButtonSecondary"
import styles from "./Coverage.module.css";

function Coverage () {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay}>
        <div className={styles.card}>
          <h2 className={styles.title}>Zonas de cobertura</h2>
          <p>Nuestra área de servicio contempla:</p>
          <ul className={styles.list}>
            <li>Veracruz</li>
            <li>Chiapas</li>
            <li>Oaxaca</li>
            <li>Tabasco</li>
            <li>Campeche</li>
            <li>Zona de la península</li>
          </ul>
          <a href="#form"><ButtonSecundary text="Contacto"></ButtonSecundary></a>
        </div>
      </div>
    </section>
  );
}

export default Coverage