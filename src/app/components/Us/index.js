import styles from "./Us.module.css"
import Image from "next/image"
import instalacionImg from "./karga.jpeg" // Ajusta la ruta a tu imagen real

function Us() {
  return (
    <section id="us" className={styles.wrapper}>
      <h2 className={styles.title}>NOSOTROS</h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3 className={styles.subtitle}>Instalación Profesional y Segura</h3>
          <br />
          <p>
            Contamos con ingenieros certificados (STPS DC-3) para realizar visitas e instalaciones,
            garantizando que todo se ajuste a los lineamientos de CFE.
          </p>
          <p>
            Aplicamos las pruebas necesarias para confirmar su funcionamiento.
          </p>
          <ul className={styles.list}>
            <li>Instalación en 1 día</li>
            <li>Instalación Residencial e Industrial</li>
            <li>Instalamos todo tipo de cargadores: Tipo 1, tipo 2 y tipo 3</li>
            <li>Instalación con cumplimiento NOM</li>
          </ul>
          <p>
            Contamos con un equipo altamente especializado y certificado ante organismos
            internacionales. Cumplimos con la NORMA Oficial Mexicana NOM-001-SEDE-2012, Instalaciones
            Eléctricas y DC-3 Instalación de cargadores para autos eléctricos.
          </p>
        </div>
        <div className={styles.image}>
          <Image src={instalacionImg} alt="Instalación de cargador" fill className={styles.img} />
        </div>
      </div>
    </section>
  )
}

export default Us
