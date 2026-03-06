import { COLORS } from "../theme/colors";

export default function Button({ 
  texto, 
  onClick, 
  tipo = "primary", 
  icono = null, 
  ancho = false,
  className = ""
}) {
  const estilos = {
    primary:  { backgroundColor: COLORS.primary, color: COLORS.white },
    secondary:{ backgroundColor: COLORS.white, color: COLORS.dark },
    danger:   { backgroundColor: COLORS.error, color: COLORS.white },
    outline:  { backgroundColor: "transparent", color: COLORS.primary, border: `2px solid ${COLORS.primary}` },
  };

  return (
    <button
      onClick={onClick}
      style={estilos[tipo]}
      className={`${ancho ? "w-full" : ""} ${className} px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm`}>
      {icono && icono}
      {texto}
    </button>
  );
}