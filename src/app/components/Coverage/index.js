import styles from "./Coverage.module.css";

export default function Coverage() {
  return (
    <section className={styles.wrapper} id="cobertura">
      <div className={styles.overlay}>
        <div className={styles.card}>
          <h2 className={styles.title}>Zonas de Cobertura</h2>
          <p>Nuestra área de servicio contempla:</p>
          <ul className={styles.list}>
            <li>Estado de México</li>
            <li>Ciudad de México</li>
            <li>Monterrey</li>
            <li>Guadalajara</li>
          </ul>
          <button className={styles.button}>Cotización remota</button>
        </div>
      </div>
    </section>
  );
}
