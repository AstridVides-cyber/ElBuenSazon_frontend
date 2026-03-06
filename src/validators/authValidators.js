export const validateLogin = (form) => {
  const errors = {};
  if (!form.email.trim())
    errors.email = "El correo es obligatorio";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "El correo no es válido";
  if (!form.password)
    errors.password = "La contraseña es obligatoria";
  else if (form.password.length < 6)
    errors.password = "Mínimo 6 caracteres";
  return errors;
};

export const validateRegister = (form) => {
  const errors = {};
  if (!form.name.trim())
    errors.name = "El nombre es obligatorio";
  if (!form.email.trim())
    errors.email = "El correo es obligatorio";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errors.email = "El correo no es válido";
  if (!form.password)
    errors.password = "La contraseña es obligatoria";
  else if (form.password.length < 6)
    errors.password = "Mínimo 6 caracteres";
  if (!form.confirmPassword)
    errors.confirmPassword = "Confirma tu contraseña";
  else if (form.password !== form.confirmPassword)
    errors.confirmPassword = "Las contraseñas no coinciden";
  return errors;
};