import { useNavigate } from "react-router-dom";
import { FaHeart, FaUserCircle } from "react-icons/fa";
import { COLORS } from "../theme/colors";

export default function Navbar({ usuario, favoritos = [] }) {
  const navigate = useNavigate();

  return (
    <nav className="shadow-sm px-8 py-4 flex items-center justify-between fixed top-0 z-50 w-full"
      style={{ backgroundColor: COLORS.white }}>

      {/* Logo */}
      <div>
        <h1 className="text-xl font-bold" style={{ color: COLORS.primary }}>
          El Buen Sazon
        </h1>
        <p className="text-xs" style={{ color: COLORS.secondary }}>
          DESAYUNOS • ALMUERZOS • DELIVERY
        </p>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6">
        <a href="#inicio"
          className="text-sm font-medium hover:opacity-70"
          style={{ color: COLORS.dark }}>Inicio
        </a>
        <a href="#servicios"
          className="text-sm font-medium hover:opacity-70"
          style={{ color: COLORS.dark }}>Servicios
        </a>
        <a href="#menu"
          className="text-sm font-medium hover:opacity-70"
          style={{ color: COLORS.dark }}>Menú
        </a>
        <a href="#contacto"
          className="text-sm font-medium hover:opacity-70"
          style={{ color: COLORS.dark }}>Contacto
        </a>

        {/* Favoritos */}
        <button
          onClick={() => navigate("/favorites")}
          className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <FaHeart size={20} color={COLORS.primary} />
          {favoritos.length > 0 && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center"
              style={{ backgroundColor: COLORS.primary }}>
              {favoritos.length}
            </span>
          )}
        </button>

        {/* Avatar / Perfil */}
        {usuario && (
          <button
            onClick={() => navigate("/profile")}
            className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-xl transition">
            <div className="text-left">
              <p className="text-xs font-bold" style={{ color: COLORS.dark }}>
                {usuario.nombre}
              </p>
            </div>
            <FaUserCircle size={28} color={COLORS.primary} />
          </button>
        )}
      </div>

    </nav>
  );
}