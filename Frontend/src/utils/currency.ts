export const format = (value: number) => {
  // Crear formateador
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value); //$2,500.00
};

export const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};