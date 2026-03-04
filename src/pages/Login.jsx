import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
    const [form, setFrom] = useState({
        email: "",
        password: "",
    }); 

    const handleChange = (e) => {
    setFrom({
        ...form,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = (e) => {
        console.log(form);
    };

    return (
        <div style={{ backgroundColor: "#F5F0E8", minHeight: "100vh" }} 
        className="flex items-center justify-center w-screen h-screen px-1">
            <div className="bg-white rounded-2xl shadow-lg p-12 w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-5">
                    <h1 style={{ color: "#E8652A" }} className="text-3xl font-bold">
                        El Buen Sazon
                    </h1>
                    <p style={{ color: "#8B5E3C" }} className="text-sm mt-1">
                        DESAYUNOS • ALMUERZOS • DELIVERY
                    </p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-center">
                    Iniciar Sesión
                </h2>

                {/* Email */}
                <div className="mb-2">
                <label className="block text-gray-600 mb-1 text-sm">
                    Correo electrónico
                </label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tucorreo@ejemplo.com"
                    autoComplete="off"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange-400"
                    style={{ backgroundColor: "white" }}
                />
                </div>

                {/* Password */}
                <div className="mb-2">
                <label className="block text-gray-600 mb-1 text-sm">
                    Contraseña
                </label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    autoComplete="new-password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-orange-400"
                    style={{ backgroundColor: "white" }}
                />
                </div>

                {/* Button */}
                <button
                    onClick={handleSubmit}
                    style={{ backgroundColor: "#E8652A" }}
                    className="w-full text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"                        
                    >
                    Ingresar
                </button>

                {/* Registro */}
                <p className="text-center text-sm text-gray-500 mt-4">
                    ¿No tienes cuenta?{" "}
                    <span
                        style={{ color: "#E8652A" }}
                        className="cursor-pointer font-semibold hover:underline"
                    >
                    Regístrate
                    </span>
                </p>

                {/* Divisor */}
                <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-3 text-gray-400 text-sm">o continúa con</span>
                <hr className="flex-grow border-gray-300" />
                </div>

                {/* Botones sociales */}
                <div className="flex justify-center gap-4">
                <button
                    onClick={() => console.log("Google login")}
                    className="w-15 h-10 rounded-full border border-gray-200 flex items-center justify-center shadow-sm hover:shadow-md transition hover:scale-105"
                    style={{ backgroundColor: "white" }}
                >
                    <FcGoogle size={20} />
                </button>

                <button
                    onClick={() => console.log("Facebook login")}
                    className="w-15 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition hover:scale-105"
                    style={{ backgroundColor: "#1877F2" }}
                >
                    <FaFacebook size={20} color="white" />
                </button>
                </div>
            </div>
        </div>
    );
};

