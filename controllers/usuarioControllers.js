
import bcrypt from 'bcrypt';
import { emailRegistro, emailRecuperarPass, emailForos } from '../helpers/email.js';
import generarId from '../helpers/genId.js';
import generarJWT from '../helpers/generarJWT.js';
import pool from '../config/db.js';
import User from '../models/Usuario.js';

export async function registrar(req, res) {
  const { email } = req.body;
  const userExists = await User.findByEmail(email);
  if (userExists) {
    return res.status(400).json({ msg: 'Este usuario ya está registrado' });
  }

  try {
    const token = generarId();
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const query = 'INSERT INTO usuarios (nombre, password, email,curp, token,genero) VALUES (?, ?, ?, ?,?,?)';
    const values = [req.body.nombre, hashedPassword, email,req.body.curp, token,req.body.genero];
    await pool.query(query, values);

    // Enviar email de confirmación
    emailRegistro({ email, nombre: req.body.nombre, token });

    res.json({
      msg: 'Usuario creado correctamente, se ha enviado un correo para confirmar tu cuenta',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
}

export async function autenticar(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);
    
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }

    if (!user.confirmado) {
      return res.status(403).json({ msg: 'Tu cuenta no ha sido confirmada' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = generarJWT(user.id);
      res.json({
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        token,
        foro:user.foro,
        rol: user.rol
      });
    } else {
      return res.status(403).json({ msg: 'El password es incorrecto' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
}

export async function confirmar(req, res) {
    const { token } = req.params;
  
    try {
      const user = await User.findByToken(token);
      if (!user) {
        return res.status(403).json({ msg: 'Token no válido' });
      }
  
      const query = `UPDATE usuarios SET confirmado = 1, token = '' WHERE token = '${token}'`;
  
      await pool.query(query);
  
      res.json({ msg: 'Usuario confirmado correctamente' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error en el servidor' });
    }
  }
  export async function validarForo(req, res) {
    const { email,nombre,foro } = req.body;
    try {
    const token = generarId();
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(403).json({ msg: 'Usuario no válido' });
      }
  
      const query = `UPDATE usuarios SET foro = '${foro}' WHERE email = '${email}'`;
  
      await pool.query(query);
    emailForos({ email, nombre,foro, token });

      res.json({ msg: 'Informacion enviada al correo' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error en el servidor' });
    }
  }
  export async function omitirForo(req, res) {
    const { email } = req.body;

    try {
      const user = await User.findByEmail(email);
      if (!user) {
        return res.status(403).json({ msg: 'Usuario no válido' });
      }
  
      const query = `UPDATE usuarios SET foro = 2 WHERE email = '${email}'`;
  
      await pool.query(query);
      res.json({ msg: 'Omicion realizada' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error en el servidor' });
    }
  }

export async function recuperarPassword(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no existe' });
    }

    const token = generarId();
    const query = `UPDATE usuarios SET token = '${token}' WHERE email = '${email}'`;
  
      await pool.query(query);

    // Enviar el email del usuario
    emailRecuperarPass({ email: user.email, nombre: user.nombre, token });

    return res.json({ msg: 'Se ha enviado un email para recuperar contraseña' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
}

export async function comprobarToken(req, res) {
  const { token } = req.params;

  try {
    const user = await User.findByToken(token);
    if (user) {
      return res.json({ msg: 'Token válido y usuario existe' });
    } else {
      return res.status(404).json({ msg: 'Token inválido' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
}

export async function nuevoPassword(req, res) {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findByToken(token);
    if (user) {
      user.password = await bcrypt.hash(password, 10);
      const query = `UPDATE usuarios SET token = '',password='${user.password}' WHERE token = '${token}'`;
  
      await pool.query(query);

      res.json({ msg: 'Password modificado correctamente' });
    } else {
      return res.status(404).json({ msg: 'Token inválido' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Error en el servidor' });
  }
}
export async function usuariosTotal(req, res) {
  
  try {
    const user = await User.findUsers();
    return res.json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error});
  }
}
export async function perfil(req, res) {
  const { usuario } = req;
  return res.json(usuario);
}