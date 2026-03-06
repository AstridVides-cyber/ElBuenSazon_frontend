// Capitalizar texto
export const capitalize = (text) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

// Formatear precio
export const formatPrice = (price) =>
  `$${parseFloat(price).toFixed(2)}`;

// Formatear fecha
export const formatDate = (date) =>
  new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });