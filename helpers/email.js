import nodemailer from "nodemailer"

 export const emailRegistro = async (data)=>{
    const {email,nombre,token} = data;
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "d0e8b3372c54b7",
          pass: "a98cb2f979dd35"
        }
      });
      //informacion del email
      const info = await transport.sendMail({
        from:"Proyecto Conacyt <cuenta@conacyt.com> ",
        to:email,
        subject:"Comprueba tu cuenta",
        text: "Comprueba tu cuenta con conacyt",
        html:`
            <p>Hola ${nombre} comprueba tu cuenta para acceder a la encuesta en conacyt</p>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace:</p>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}" >Comprobar cuenta</a>
            <p>Si tu no creaste esta cuenta,ignora este correo</p>
        `
      })

  }

  
 export const emailRecuperarPass = async (data)=>{
  const {email,nombre,token} = data;
  const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "d0e8b3372c54b7",
        pass: "a98cb2f979dd35"
      }
    });
    //informacion del email
    const info = await transport.sendMail({
      from:"Proyecto Conacyt <cuenta@conacyt.com> ",
      to:email,
      subject:"Reestablece tu contraseña",
      text: "Reestablece tu contraseña",
      html:`
          <p>Hola ${nombre} has solicitado reestablecer tu contraseña</p>
          <p>Accede al siguiente enlace para generar una nueva contraseña:</p>
          <a href="${process.env.FRONTEND_URL}/recuperar-password/${token}" >Reestablecer contraseña</a>
          <p>Si tu no solicitaste este email,ignora este correo</p>
      `
    })

}
export const emailForos = async (data)=>{
  const {email,nombre,foro,token} = data;
  const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "d0e8b3372c54b7",
        pass: "a98cb2f979dd35"
      }
    });
    //informacion del email
    const info = await transport.sendMail({
      from:"Proyecto Conacyt <cuenta@conacyt.com> ",
      to:email,
      subject:"Informacion sobre el foro",
      text: "Informacion sobre el foro",
      html:`
          <p>Hola ${nombre} has solicitado informacion para asistir al foro ${foro} </p>
          <p>Foro de ${foro}</p>
          <p>Direccion:</p>
          <p>Instrucciones</p>

          
          <p>Si tu no solicitaste este email,ignora este correo</p>
      `
    })

}