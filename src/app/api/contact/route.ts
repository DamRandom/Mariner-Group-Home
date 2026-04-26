import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validaciones básicas de servidor
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos obligatorios' }, { status: 400 });
    }

    const { EMAIL_USER, EMAIL_PASS } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error('Faltan las credenciales de correo (EMAIL_USER o EMAIL_PASS) en el archivo .env.local');
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      );
    }

    // Configurar el transporte SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`, // Usamos EMAIL_USER para asegurar la entrega, el remitente real va en replyTo
      to: 'absolutequalityservices752@gmail.com',
      replyTo: email,
      subject: `Nuevo mensaje de contacto en Mariner Group Home de: ${name}`,
      text: `Has recibido un nuevo mensaje de contacto a través del sitio web de Mariner Group Home.\n\nNombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}\n`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0b2e59;">Nuevo Mensaje de Contacto</h2>
          <p>Has recibido un nuevo mensaje desde el sitio web de Mariner Group Home.</p>
          <table style="width: 100%; max-width: 600px; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd; width: 100px;">Nombre:</th>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; border-bottom: 1px solid #ddd;">Correo:</th>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <th style="text-align: left; padding: 10px; vertical-align: top;">Mensaje:</th>
              <td style="padding: 10px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    };

    // Enviar correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Correo enviado correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error enviando el correo:', error);
    return NextResponse.json(
      { error: 'Ocurrió un error al enviar el correo' },
      { status: 500 }
    );
  }
}
