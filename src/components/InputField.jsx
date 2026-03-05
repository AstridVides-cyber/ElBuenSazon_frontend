const NARANJA = "#E8652A";

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
    <div className="mb-3">
      {label && (
        <label className="block text-gray-600 mb-1 text-xs">{label}</label>
      )}
      <div className="relative">
        {icono && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
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
          className={`w-full border rounded-lg ${icono ? "pl-8" : "pl-4"} pr-4 py-3 text-sm text-gray-800 focus:outline-none ${
            error ? "border-red-400" : "border-gray-300 focus:border-orange-400"
          }`}
          style={{ backgroundColor: "white" }}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}