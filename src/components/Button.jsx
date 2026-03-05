const NARANJA = "#E8652A";

export default function Button({ 
  texto, 
  onClick, 
  tipo = "primary", 
  icono = null, 
  ancho = false 
}) {
  const estilos = {
    primary: { backgroundColor: NARANJA, color: "white" },
    secondary: { backgroundColor: "white", color: "#374151" },
    danger: { backgroundColor: "#EF4444", color: "white" },
    outline: { backgroundColor: "transparent", color: NARANJA, border: `2px solid ${NARANJA}` },
  };

  return (
    <button
      onClick={onClick}
      style={estilos[tipo]}
      className={`${ancho ? "w-full" : ""} px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2 text-sm`}>
      {icono && icono}
      {texto}
    </button>
  );
}