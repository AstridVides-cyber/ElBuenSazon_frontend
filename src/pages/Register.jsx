import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) 
        newErrors.name = "El nombre es obligatorio";
    if (!form.email.trim()) 
        newErrors.email = "El correo es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        newErrors.email = "El correo no es válido";
    if (!form.password) 
        newErrors.password = "La contraseña es obligatoria";
    else if (form.password.length < 6) 
        newErrors.password = "Mínimo 6 caracteres";
    if (!form.confirmPassword) 
        newErrors.confirmPassword = "Confirma tu contraseña";
    else if (form.password !== form.confirmPassword) 
        newErrors.confirmPassword = "Las contraseñas no coinciden";
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    console.log("Register:", form);
    setForm({ 
        name: "", 
        email: "", 
        password: "", 
        confirmPassword: "" });
    setErrors({});
    alert("¡Cuenta creada exitosamente!");
  };

  const inputClass = (field) =>
    `w-full border rounded-lg px-3 py-2 text-xs text-gray-800 focus:outline-none ${
      errors[field] ? "border-red-400" : "border-gray-300 focus:border-orange-400"
    }`;

  return (
    <div
      className="flex items-center justify-center w-screen h-screen"
      style={{ backgroundColor: "#F5F0E8", minHeight: "100vh" }}
    >
      <div className="bg-white rounded-2xl shadow-lg w-full px-8 py-8" style={{ maxWidth: "450px" }}>

        {/* Logo */}
        <div className="text-center mb-3">
            <h1 style={{ color: "#E8652A" }} className="text-2xl font-bold">
                El Buen Sazon
            </h1>
            <p style={{ color: "#8B5E3C" }} className="text-xs mt-0.5">
                DESAYUNOS • ALMUERZOS • DELIVERY
            </p>
        </div>

        <h2 className="text-base font-semibold text-gray-700 mb-3 text-center">
            Crear Cuenta
        </h2>

        {/* Nombre */}
        <div className="mb-1">
            <input 
                type="text" 
                name="name" 
                value={form.name} onChange={handleChange}
                placeholder="Nombre completo" 
                autoComplete="off"
                className={inputClass("name")} 
                style={{ backgroundColor: "white" }} 
            />
          {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-2">
            <input 
                type="email" 
                name="email" 
                value={form.email} 
                onChange={handleChange}
                placeholder="Tucorreo@ejemplo.com" 
                autoComplete="off"
                className={inputClass("email")} 
                style={{ backgroundColor: "white" }} 
            />
          {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-2">
            <input 
                type="password" 
                name="password" 
                value={form.password} 
                onChange={handleChange}
                placeholder="Contraseña" 
                autoComplete="new-password"
                className={inputClass("password")} 
                style={{ backgroundColor: "white" }} 
            />
          {errors.password && <p className="text-red-500 text-xs mt-0.5">{errors.password}</p>}
        </div>

        {/* Confirmar Password */}
        <div className="mb-3">
            <label className="block text-gray-600 mb-0.5 text-xs">
                
            </label>
          <input 
                type="password" 
                name="confirmPassword" 
                value={form.confirmPassword} 
                onChange={handleChange}
                placeholder="Confirmar contraseña" 
                autoComplete="new-password"
                className={inputClass("confirmPassword")} 
                style={{ backgroundColor: "white" }} 
            />
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-0.5">{errors.confirmPassword}</p>}
        </div>

        {/* Botón */}
        <button onClick={handleSubmit} style={{ backgroundColor: "#E8652A" }}
          className="w-full text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition">
          Registrarse
        </button>

        {/* Login */}
        <p className="text-center text-xs text-gray-500 mt-2">
          ¿Ya tienes cuenta?{" "}
          <span style={{ color: "#E8652A" }} className="cursor-pointer font-semibold hover:underline">
            Inicia Sesión
          </span>
        </p>

        {/* Divisor */}
        <div className="flex items-center my-3">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-400 text-xs">o continúa con</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Botones sociales */}
        <div className="flex justify-center gap-4">
          <button onClick={() => console.log("Google register")}
            className="w-15 h-10 rounded-full border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition hover:scale-105"
            style={{ backgroundColor: "#d5dde7" }}>
            <FcGoogle size={20} />
          </button>
          <button onClick={() => console.log("Facebook register")}
            className="w-15 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition hover:scale-105"
            style={{ backgroundColor: "#1877F2" }}>
            <FaFacebook size={20} color="white" />
          </button>
        </div>

      </div>
    </div>
  );
}