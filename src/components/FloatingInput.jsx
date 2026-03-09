import { COLORS } from "../theme/colors";

export default function FloatingInput({ 
  label, 
  name, 
  value, 
  onChange, 
  tipo = "text", 
  error = "" 
}) {
  return (
    <div className="relative mb-4">
      <input
        id={name}
        type={tipo}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
        className="peer w-full border-b-2 bg-transparent pt-5 pb-2 text-sm focus:outline-none transition-all"
        style={{
          borderColor: error ? COLORS.error : COLORS.inputBorder,
          color: COLORS.dark,
        }}
      />
      <label
        htmlFor={name}
        className="absolute left-0 top-4 text-sm transition-all duration-200 cursor-text peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:-top-1 peer-focus:text-xs peer-[&:not(:placeholder-shown)]:-top-1 peer-[&:not(:placeholder-shown)]:text-xs"
        style={{ color: value ? COLORS.primary : COLORS.labelActive }}>
        {label}
      </label>
      {error && (
        <p className="text-xs mt-1" style={{ color: COLORS.error }}>{error}</p>
      )}
    </div>
  );
}