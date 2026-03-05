import { 
    FaPhone, 
    FaFacebook, 
    FaInstagram, 
    FaWhatsapp 
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const NARANJA = "#E8652A";
const BEIGE = "#F5F0E8";

export default function Footer() {
  return (
    <footer className="px-8 py-10" style={{ backgroundColor: "#2C1A0E" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 mb-8">

        {/* Logo */}
        <div>
          <h2 style={{ color: NARANJA }} className="text-xl font-bold mb-1">
            El Buen Sazon
          </h2>
          <p style={{ color: BEIGE }} className="text-xs mb-4">
            DESAYUNOS • ALMUERZOS • DELIVERY
          </p>
          <p className="text-gray-400 text-sm">
            Tu restaurante de confianza con los sabores más auténticos y caseros de la ciudad.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="text-white font-bold mb-4">Enlaces Rápidos</h4>
          {["inicio", "servicios", "menu", "contacto"].map((l, i) => (
            <a key={i} href={`#${l}`}
              className="block text-gray-400 text-sm mb-2 hover:text-orange-400 transition capitalize">
              {l}
            </a>
          ))}
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-white font-bold mb-4">Síguenos en:</h4>
          <div className="flex gap-3 mb-4">
            <button 
              className="w-15 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
              style={{ backgroundColor: "#1877F2" }}>
              <FaFacebook size={16} color="white" />
            </button>
            <button 
              className="w-15 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
              style={{ backgroundColor: "#E1306C" }}>
              <FaInstagram size={16} color="white" />
            </button>
            <button 
              className="w-15 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition"
              style={{ backgroundColor: "#25D366" }}>
              <FaWhatsapp size={16} color="white" />
            </button>
          </div>
          <p className="text-gray-400 text-sm flex items-center gap-2 mb-2">
            <FaPhone size={14} color={NARANJA} /> 7500 - 1312
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <MdEmail size={16} color={NARANJA} /> contacto@elbuensazon.com
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 text-sm">
          © 2026 El Buen Sazon. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}