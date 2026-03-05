import { useNavigate } from "react-router-dom";
import { FaHeart, FaUserCircle } from "react-icons/fa";

const NARANJA = "#E8652A";
const CAFE = "#8B5E3C";

export default function Navbar({ usuario, favoritos = [] }) {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between fixed top-0 z-50 w-full">
      
      {/* Logo */}
      <div>
        <h1 style={{ color: NARANJA }} className="text-xl font-bold">
          El Buen Sazon
        </h1>
        <p style={{ color: CAFE }} className="text-xs">
          DESAYUNOS • ALMUERZOS • DELIVERY
        </p>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6">
        <a href="#inicio" style={{ color: CAFE }} 
          className="text-sm font-medium hover:opacity-70">Inicio
        </a>
        <a href="#servicios" style={{ color: CAFE }} 
          className="text-sm font-medium hover:opacity-70">Servicios
        </a>
        <a href="#menu" style={{ color: CAFE }} 
          className="text-sm font-medium hover:opacity-70">Menú
        </a>
        <a href="#contacto" style={{ color: CAFE }} 
          className="text-sm font-medium hover:opacity-70">Contacto
        </a>

        {/* Favoritos */}
        <button
          onClick={() => navigate("/favorites")}
          className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <FaHeart size={20} color={NARANJA} />
          {favoritos.length > 0 && (
            <span 
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center"
              style={{ backgroundColor: NARANJA }}>
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
              <p className="text-xs font-bold text-gray-700">{usuario.nombre}</p>
            </div>
            <FaUserCircle size={28} color={NARANJA} />
          </button>
        )}
      </div>

    </nav>
  );
}