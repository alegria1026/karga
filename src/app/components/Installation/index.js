'use client';

import {
  HiOutlineDocumentText,
  HiOutlineClipboardList,
  HiOutlineCalendar,
} from 'react-icons/hi';

import {
  HiOutlineWrenchScrewdriver,
  HiOutlineBuildingOffice,
  HiOutlinePresentationChartBar
} from 'react-icons/hi2';

import styles from './Installation.module.css';

function Installation() {
  const steps = [
    {
      icon: <HiOutlineDocumentText size={64} />,
      title: 'SOLICITUD',
    },
    {
      icon: <HiOutlineClipboardList size={64} />,
      title: 'LEVANTAMIENTO Y COTIZACIÓN',
    },
    {
      icon: <HiOutlineCalendar size={64} />,
      title: 'AGENDA',
    },
    {
      icon: <HiOutlineWrenchScrewdriver size={64} />,
      title: 'INSTALACIÓN Y CONEXIÓN',
    },
    {
      icon: <HiOutlineBuildingOffice size={64} />,
      title: 'TRÁMITE ANTE CFE',
    },
    {
      icon: <HiOutlinePresentationChartBar size={64} />,
      title: 'PUESTA EN MARCHA Y CAPACITACIÓN',
    },
  ];

  return (
    <section className={styles.processWrapper}>
      <div className={styles.processHeader}>
        <br />
        <h2 className={styles.mainTitle}>Conoce nuestro proceso de instalación</h2>
      </div>

      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepItem}>
            <div className={styles.iconWrapper}>
              {step.icon}
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Installation;