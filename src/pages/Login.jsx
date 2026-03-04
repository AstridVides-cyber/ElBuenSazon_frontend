import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        const newErrors = {};
        if (!form.email.trim())
        newErrors.email = "El correo es obligatorio";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
        newErrors.email = "El correo no es válido";
        if (!form.password)
        newErrors.password = "La contraseña es obligatoria";
        else if (form.password.length < 6)
        newErrors.password = "Mínimo 6 caracteres";
        return newErrors;
    };

    const handleSubmit = () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
        }
        console.log("Login:", form);
    };

    const inputClass = (field) =>
        `w-full border rounded-lg pl-8 pr-4 py-3 text-sm text-gray-800 focus:outline-none ${
        errors[field] ? "border-red-400" : "border-gray-300 focus:border-orange-400"
    }`;

    return (
        <div style={{ backgroundColor: "#F5F0E8" }}
            className="flex items-center justify-center w-screen h-screen px-1"
        >
            <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-2">
                    <h1 style={{ color: "#E8652A" }} className="text-3xl font-bold">
                        El Buen Sazon
                    </h1>
                    <p style={{ color: "#8B5E3C" }} className="text-sm mt-1">
                        DESAYUNOS • ALMUERZOS • DELIVERY
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
                    Iniciar Sesión
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-600 mb-1 text-sm">Correo electrónico</label>
                    <div className="relative">
                        <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
                        <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="tu@email.com" autoComplete="off"
                        className={inputClass("email")} style={{ backgroundColor: "white" }}
                        />
                    </div>
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Password */}
                <div className="mb-5">
                    <label className="block text-gray-600 mb-1 text-sm">Contraseña</label>
                    <div className="relative">
                        <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                        <input
                        type="password" name="password" value={form.password} onChange={handleChange}
                        placeholder="••••••••" autoComplete="new-password"
                        className={inputClass("password")} style={{ backgroundColor: "white" }}
                        />
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                </div>

                {/* Botón */}
                <button onClick={handleSubmit} style={{ backgroundColor: "#E8652A" }}
                    className="w-full text-white py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
                    <FaUser size={14} />
                    Ingresar
                </button>

                {/* Registro */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    ¿No tienes cuenta?{" "}
                    <span style={{ color: "#E8652A" }}
                        className="cursor-pointer font-semibold hover:underline"
                        onClick={() => navigate("/register")}>
                        Regístrate
                    </span>
                </p>

                {/* Divisor */}
                <div className="flex items-center my-5">
                    <hr className="flex-grow border-gray-300" />
                    <span className="mx-3 text-gray-400 text-sm">o continúa con</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Botones sociales */}
                <div className="flex justify-center gap-5">
                    <button onClick={() => console.log("Google login")}
                        className="w-15 h-10 rounded-full border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition hover:scale-105"
                        style={{ backgroundColor: "#d5dde7" }}>
                        <FcGoogle size={20} />
                    </button>
                    <button onClick={() => console.log("Facebook login")}
                        className="w-15 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition hover:scale-105"
                        style={{ backgroundColor: "#1877F2" }}>
                        <FaFacebook size={20} color="white" />
                    </button>
                </div>
            </div>
        </div>
    );
};