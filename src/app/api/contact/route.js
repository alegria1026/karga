import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Obtener los datos del formulario
    const formData = await request.json();
    const { nombre, telefono, correo, asunto } = formData;

    // Verificar datos requeridos
    if (!nombre || !telefono || !correo || !asunto) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Configurar el transportador de correo para Gmail con la contraseña de aplicación
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'yahiralegria25@gmail.com',
        pass: 'jemjcwwmgfxlgmxo' // Contraseña de aplicación proporcionada
      }
    });

    // Obtener el texto descriptivo del asunto
    const asuntoTexto = getAsuntoText(asunto);

    // Configurar el correo
    const mailOptions = {
      from: '"Formulario de Contacto" <yahiralegria25@gmail.com>',
      to: 'rmg07@outlook.com',
      subject: `Nuevo mensaje de contacto: ${asuntoTexto}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Asunto:</strong> ${asuntoTexto}</p>
      `,
      replyTo: correo
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}

// Función para obtener el texto descriptivo del asunto
function getAsuntoText(value) {
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