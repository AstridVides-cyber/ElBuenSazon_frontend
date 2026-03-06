import { FaPhone, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { COLORS } from "../theme/colors";

export default function Footer() {
  return (
    <footer className="px-8 py-10" style={{ backgroundColor: COLORS.dark }}>
      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 mb-8">

        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold mb-1" style={{ color: COLORS.primary }}>
            El Buen Sazon
          </h2>
          <p className="text-xs mb-4" style={{ color: COLORS.secondary }}>
            DESAYUNOS • ALMUERZOS • DELIVERY
          </p>
          <p className="text-sm" style={{ color: COLORS.secondary }}>
            Tu restaurante de confianza con los sabores más auténticos y caseros de la ciudad.
          </p>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h4 className="font-bold mb-4" style={{ color: COLORS.white }}>
            Enlaces Rápidos
          </h4>
          {["inicio", "servicios", "menu", "contacto"].map((l, i) => (
            <a key={i} href={`#${l}`}
              className="block text-sm mb-2 hover:opacity-70 transition capitalize"
              style={{ color: COLORS.secondary, textDecoration: "none" }}>
              {l}
            </a>
          ))}
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="font-bold mb-4" style={{ color: COLORS.white }}>
            Síguenos en:
          </h4>
          <div className="flex gap-3 mb-4">
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition"
              style={{ backgroundColor: "#1877F2" }}>
              <FaFacebook size={16} color="white" />
            </button>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition"
              style={{ backgroundColor: "#E1306C" }}>
              <FaInstagram size={16} color="white" />
            </button>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition"
              style={{ backgroundColor: "#25D366" }}>
              <FaWhatsapp size={16} color="white" />
            </button>
          </div>
          <p className="text-sm flex items-center gap-2 mb-2" style={{ color: COLORS.secondary }}>
            <FaPhone size={14} color={COLORS.primary} /> 7500 - 1312
          </p>
          <p className="text-sm flex items-center gap-2" style={{ color: COLORS.secondary }}>
            <MdEmail size={16} color={COLORS.primary} /> contacto@elbuensazon.com
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t pt-6 text-center" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
        <p className="text-sm" style={{ color: COLORS.secondary }}>
          © 2026 El Buen Sazon. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}