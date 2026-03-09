import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { COLORS } from "../theme/colors";
import { validateLogin } from "../validators/authValidators";
import useForm from "../hooks/useForm";
import FloatingInput from "../components/FloatingInput";

export default function Login() {
  const navigate = useNavigate();
  const { form, errors, setErrors, handleChange } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    const newErrors = validateLogin(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Login:", form);
  };

  return (
    <div className="flex w-screen h-screen">

      {/* LADO IZQUIERDO - Imagen full */}
      <div className="hidden md:block w-1/2 relative">

        {/* Imagen de fondo */}
        <div className="absolute inset-0"
          style={{
            background: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800') center/cover`
          }}>
        </div>

        {/* Overlay degradado */}
        <div className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, 
            ${COLORS.overlayDark} 0%, 
            ${COLORS.overlayMid} 50%, 
            ${COLORS.overlayLight} 100%)`
          }}>
        </div>

        {/* Logo arriba */}
        <div className="absolute top-8 left-8 z-10">
          <h1 className="text-2xl font-bold" style={{ color: COLORS.white }}>
            El Buen Sazon
          </h1>
          <p className="text-xs opacity-70" style={{ color: COLORS.white }}>
            DESAYUNOS • ALMUERZOS • DELIVERY
          </p>
        </div>

        {/* Texto abajo */}
        <div className="absolute bottom-10 left-8 right-8 z-10">
          <h2 className="text-3xl font-bold mb-2" style={{ color: COLORS.white }}>
            Sabor auténtico<br />en cada plato
          </h2>
          <p className="text-sm opacity-75 max-w-xs" style={{ color: COLORS.white }}>
            Los mejores desayunos y almuerzos preparados con amor y los ingredientes más frescos.
          </p>
          <div className="flex gap-2 mt-6">
            <div className="w-6 h-1 rounded-full" style={{ backgroundColor: COLORS.secondary }}></div>
            <div className="w-2 h-1 rounded-full opacity-40" style={{ backgroundColor: COLORS.white }}></div>
            <div className="w-2 h-1 rounded-full opacity-40" style={{ backgroundColor: COLORS.white }}></div>
          </div>
        </div>
      </div>

      {/* LADO DERECHO - Formulario */}
      <div className="flex w-full md:w-1/2 flex-col justify-between px-10 py-8"
        style={{ backgroundColor: COLORS.formBg }}>

        {/* Header top */}
        <div className="flex items-center justify-between">
          <div className="md:hidden">
            <h1 className="text-xl font-bold" style={{ color: COLORS.primary }}>
              El Buen Sazon
            </h1>
          </div>
          <div className="md:flex hidden"></div>
          <button
            onClick={() => navigate("/register")}
            className="text-sm font-semibold px-4 py-2 rounded-lg border hover:opacity-80 transition"
            style={{
              borderColor: COLORS.dark,
              color: COLORS.dark,
              backgroundColor: "transparent"
            }}>
            Regístrate
          </button>
        </div>

        {/* Formulario centrado */}
        <div className="w-full mx-auto" style={{ maxWidth: "420px" }}>

          <h2 className="text-3xl font-bold mb-1" style={{ color: COLORS.dark }}>
            ¡Bienvenido de nuevo!
          </h2>
          <p className="text-sm mb-10" style={{ color: COLORS.placeholder }}>
            Inicia sesión en tu cuenta
          </p>

          {/* Inputs flotantes */}
          <FloatingInput
            label="Correo electrónico"
            name="email"
            value={form.email}
            onChange={handleChange}
            tipo="email"
            error={errors.email}
          />
          <FloatingInput
            label="Contraseña"
            name="password"
            value={form.password}
            onChange={handleChange}
            tipo="password"
            error={errors.password}
          />

          {/* Olvidé contraseña */}
          <div className="text-right mb-8">
            <span className="text-xs cursor-pointer hover:underline"
              style={{ color: COLORS.placeholder }}>
              ¿Olvidaste tu contraseña?
            </span>
          </div>

          {/* Botón principal */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-xl font-semibold hover:opacity-90 transition mb-6"
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.white,
              boxShadow: `0 4px 15px rgba(210,39,1,0.3)`
            }}>
            Ingresar
          </button>

          {/* Divisor */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow" style={{ borderColor: COLORS.inputFocus }} />
            <span className="mx-3 text-xs" style={{ color: COLORS.placeholder }}>
              o inicia con
            </span>
            <hr className="flex-grow" style={{ borderColor: COLORS.inputFocus }} />
          </div>

          {/* Botones sociales */}
          <div className="flex gap-3">
            <button onClick={() => console.log("Google")}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium border hover:bg-gray-50 transition"
              style={{
                backgroundColor: COLORS.white,
                color: COLORS.dark,
                borderColor: COLORS.inputFocus
              }}>
              <FcGoogle size={18} /> Google
            </button>
            <button onClick={() => console.log("Facebook")}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium hover:opacity-90 transition"
              style={{
                backgroundColor: COLORS.facebook,
                color: COLORS.white
              }}>
              <FaFacebook size={18} /> Facebook
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs" style={{ color: COLORS.placeholder }}>
          © 2026 El Buen Sazon. Todos los derechos reservados.
        </p>

      </div>
    </div>
  );
}