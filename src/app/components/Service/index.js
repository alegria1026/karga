import styles from './Service.module.css';
import { CpuChipIcon, Battery100Icon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

function Service() {

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>SERVICIOS</h2>
      
      <div className={styles.content}>
        <div className={styles.card}>
          <h3 className={styles.subtitle}>Diseño</h3>
          <div className={styles.iconContainer}>
            <CpuChipIcon className={styles.icon} width={60} height={60} />
          </div>
          <p className={styles.cardText}>
            Analizamos cada proyecto para ofrecer soluciones personalizadas, eficientes y seguras. 
            Nuestro equipo técnico diseña la infraestructura de carga ideal para residencias, 
            negocios o flotillas, garantizando compatibilidad, escalabilidad y eficiencia energética.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.subtitle}>Instalación</h3>
          <div className={styles.iconContainer}>
            <Battery100Icon className={styles.icon} width={60} height={60} />
          </div>
          <p className={styles.cardText}>
            Realizamos la instalación profesional de cargadores eléctricos con los más altos 
            estándares de calidad y normatividad. Nos encargamos de todo el proceso: desde el 
            cableado hasta la puesta en marcha, asegurando que tu estación funcione de forma 
            segura y confiable desde el primer día.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.subtitle}>Mantenimiento</h3>
          <div className={styles.iconContainer}>
            <WrenchScrewdriverIcon className={styles.icon} width={60} height={60} />
          </div>
          <p className={styles.cardText}>
            Ofrecemos mantenimiento preventivo y correctivo para garantizar el óptimo 
            funcionamiento de tu estación de carga. Monitoreamos el rendimiento, realizamos 
            ajustes técnicos y brindamos soporte continuo para prolongar la vida útil del sistema.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;