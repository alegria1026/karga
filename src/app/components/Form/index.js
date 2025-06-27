'use client'

import { useState } from 'react'
import styles from './Form.module.css'
import ButtonSecundary from '../ButtonSecondary'

function Form() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    asunto: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })
    
    try {
      // Usamos la API Route interna de Next.js
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (response.ok) {
        // Éxito
        setStatus({
          type: 'success',
          message: 'Formulario enviado exitosamente. Nos pondremos en contacto pronto.'
        })
        
        // Limpiar el formulario
        setFormData({
          nombre: '',
          telefono: '',
          correo: '',
          asunto: ''
        })
      } else {
        // Error desde el servidor
        setStatus({
          type: 'error',
          message: result.error || 'Hubo un error al enviar el formulario. Por favor, intente nuevamente.'
        })
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setStatus({
        type: 'error',
        message: 'Error de conexión. Por favor, verifique su conexión a internet e intente nuevamente.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Función para obtener el texto del asunto seleccionado
  const getAsuntoText = (value) => {
    const options = {
      'cotizacion_instalacion': 'Quiero una cotización para instalar',
      'agendar_mantenimiento': 'Quiero agendar mantenimiento a mi estación de carga',
      'info_flotillas': 'Quiero información sobre los servicios a flotillas comerciales',
      'info_industrial': 'Quiero información sobre los servicios industriales y cargadores de potencia elevada',
      'cotizar_electrolineras': 'Me interesa cotizar un proyecto de electrolineras',
      'info_paneles_solares': 'Quiero información sobre los sistemas complementados con paneles solares'
    };
    return options[value] || value;
  }

  return (
    <section className={styles.processWrapper}>
      <div className={styles.container}>
        <h1 className={styles.heading}>CONTACTO</h1>
        
        {status.message && (
          <div className={`${styles.alert} ${styles[status.type]}`}>
            {status.message}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.label}>
              Nombre completo <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className={styles.input}
              disabled={isSubmitting}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="telefono" className={styles.label}>
              Teléfono <span className={styles.required}>*</span>
            </label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className={styles.input}
              disabled={isSubmitting}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="correo" className={styles.label}>
              Correo <span className={styles.required}>*</span>
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className={styles.input}
              disabled={isSubmitting}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="asunto" className={styles.label}>
              Asunto <span className={styles.required}>*</span>
            </label>
            <select
              id="asunto"
              name="asunto"
              value={formData.asunto}
              onChange={handleChange}
              required
              className={styles.select}
              disabled={isSubmitting}
            >
              <option value="">Seleccione un asunto</option>
              <option value="cotizacion_instalacion">Quiero una cotización para instalar</option>
              <option value="agendar_mantenimiento">Quiero agendar mantenimiento a mi estación de carga</option>
              <option value="info_flotillas">Quiero información sobre los servicios a flotillas comerciales</option>
              <option value="info_industrial">Quiero información sobre los servicios industriales y cargadores de potencia elevada</option>
              <option value="cotizar_electrolineras">Me interesa cotizar un proyecto de electrolineras</option>
              <option value="info_paneles_solares">Quiero información sobre los sistemas complementados con paneles solares</option>
            </select>
          </div>

          <ButtonSecundary 
            text={isSubmitting ? "Enviando..." : "Solicitar"} 
            disabled={isSubmitting} 
          />
        </form>
      </div>
    </section>
  )
}

export default Form