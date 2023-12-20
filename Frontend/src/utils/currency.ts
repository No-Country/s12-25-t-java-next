export const format = (value: number) => {
  // Crear formateador
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formatter.format(value) //$2,500.00
}

export const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}

export const trimTo3Words = (text: string) => {
  // Split the text into words
  const words = text.split(' ');
  const first3Words = words.slice(0, 3);

  // Take only the first 3 words
  if (words.length < 3) {
    const remainingWords = words.slice(3);
    first3Words.push(...remainingWords);
  }
  // Join the words back into a string
  const result = first3Words.join(' ');

  return result;
}