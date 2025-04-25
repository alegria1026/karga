import styles from './Installation.module.css'

function Installation() {
  const steps = [
    {
      icon: "/icons/programacion.png",
      title: "SOLICITUD",
    },
    {
      icon: "/icons/programacion.png",
      title: "LEVANTAMIENTO Y COTIZACIÓN",
    },
    {
      icon: "/icons/programacion.png",
      title: "AGENDA",
    },
    {
      icon: "/icons/instalacion.png",
      title: "INSTALACIÓN Y CONEXIÓN",
    },
    {
      icon: "/icons/puesta.png",
      title: "TRÁMITE ANTE CFE",
    },
    {
      icon: "/icons/mantenimiento.png",
      title: "PUESTA EN MARCHA Y CAPACITACIÓN",
    }
  ];

  return (
    <section className={styles.processWrapper}>
      <div className={styles.processHeader}>
        <br/>
        <h2 className={styles.mainTitle}>Conoce nuestro proceso de instalación</h2>
      </div>
      
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepItem}>
            <div className={styles.iconWrapper}>
              <img src={step.icon.src} alt={step.title} className={styles.stepIcon} />
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Installation;