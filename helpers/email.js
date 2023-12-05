import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()
export const emailRegistro = async (data) => {
  const { email, nombre, token } = data;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  //informacion del email
  const info = await transport.sendMail({
    from: `Diagnóstico de Mujeres Dedicadas a la Ciencia y la Tecnología 2023 <${process.env.EMAIL_USER}> `,
    to: email,
    subject: "Comprueba tu cuenta",
    text: "Comprueba tu cuenta con conacyt",
    html: `
            <p>Hola ${nombre} comprueba tu cuenta para acceder al cuestionario para el Diagnóstico de Mujeres Dedicadas a la Ciencia y la Tecnología 2023</p>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar cuenta</a>
            <p>Si tu no creaste esta cuenta,ignora este correo</p>
        `
  })

}


export const emailRecuperarPass = async (data) => {
  const { email, nombre, token } = data;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  //informacion del email
  const info = await transport.sendMail({
    from: `Diagnóstico de Mujeres Dedicadas a la Ciencia y la Tecnología 2023 <${process.env.EMAIL_USER}> `,
    to: email,
    subject: "Reestablece tu contraseña",
    text: "Reestablece tu contraseña",
    html: `
          <p>Hola ${nombre} has solicitado reestablecer tu contraseña</p>
          <p>Accede al siguiente enlace para generar una nueva contraseña:</p>
          <a href="${process.env.FRONTEND_URL}/recuperar-password/${token}" >Reestablecer contraseña</a>
          <p>Si tu no solicitaste este email,ignora este correo</p>
      `
  })

}
export const emailForos = async (data) => {
  const { email, nombre, foro, token } = data;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  //informacion del email
  if (foro.includes("Coatzacoalcos")) {
    await transport.sendMail({
      from: `Diagnóstico de Mujeres Dedicadas a la Ciencia y la Tecnología 2023 <${process.env.EMAIL_USER}> `,
      to: email,
      subject: "Informacion sobre el foro",
      text: "Informacion sobre el foro",
      html: `
            <p>Hola ${nombre} has solicitado informacion para asistir al foro ${foro} </p>
            <p>Foro de ${foro}</p>
            <p>Estimada participante: </p>

            <p>Te informamos que el foro de expresión ciudadana en la sede que seleccionaste será el día 06 de diciembre en las instalaciones del Centro de Convenciones Coatzacoalcos ubicado en: Avenida Abraham Zabludovsky 201, Transportistas, 96535 Coatzacoalcos, Ver.</p>
            
            <p>A partir de las 10:00 am podrás realizar tu registro en el modulo que encontraras en la entrada. El evento iniciara a las 10:30 am.</p>
            
            <p>Recuerda que tu participación es importante.</p>
            
            <p>“Ciencia, tecnología e innovación con perspectiva de género”</p>
  
            
            <p>Si tu no solicitaste participar en este evento,ignora este correo</p>
        `
    })
    return
} else{
  await transport.sendMail({
    from: `Diagnóstico de Mujeres Dedicadas a la Ciencia y la Tecnología 2023 <${process.env.EMAIL_USER}> `,
    to: email,
    subject: "Informacion sobre el foro",
    text: "Informacion sobre el foro",
    html: `
          <p>Hola ${nombre} has solicitado informacion para asistir al foro ${foro} </p>
          <p>Foro de ${foro}</p>
          <p>Te informamos informaremos sobre la localizacion del foro dias antes del evento.</p>

          
          <p>Si tu no solicitaste participar en este evento,ignora este correo</p>
      `
  })
  return
}

}