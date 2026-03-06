import { COLORS } from "../theme/colors";

export default function InputField({ 
  label, 
  name, 
  value, 
  onChange, 
  tipo = "text", 
  placeholder, 
  icono = null, 
  error = "" 
}) {
  return (
    <div className="mb-2">
      {label && (
        <label className="block mb-1 text-xs" style={{ color: COLORS.dark }}>
          {label}
        </label>
      )}
      <div className="relative">
        {icono && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: COLORS.secondary }}>
            {icono}
          </span>
        )}
        <input
          type={tipo}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full border rounded-lg ${icono ? "pl-8" : "pl-4"} pr-4 py-2 text-sm focus:outline-none ${
            error ? "border-red-400" : "border-gray-300"
          }`}
          style={{ 
            backgroundColor: COLORS.white,
            color: COLORS.dark,
          }}
        />
      </div>
      {error && <p className="text-xs mt-1" style={{ color: COLORS.error }}>{error}</p>}
    </div>
  );
}