import React from "react";
import styles from "./Brand.module.css";
import tesla from "./tesla.png"
import otro from "./otro.png"

function Brand() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>MARCAS</h2>
        
        <div className={styles.brandsGrid}>
          <div className={styles.brandCard}>
            <img 
              src={tesla.src}
              alt="Marca 1" 
              className={styles.brandImage} 
            />
          </div>
          <div className={styles.brandCard}>
            <img 
              src={otro.src} 
              alt="Marca 2" 
              className={styles.brandImage} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;