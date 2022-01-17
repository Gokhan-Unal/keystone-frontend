export default function formatMoney(amount = 0) {
  let minimumFractionDigits;
  if (amount % 100 === 0) {
    minimumFractionDigits = 0;
  } else {
    minimumFractionDigits = 2;
  }
  const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    minimumFractionDigits,
  });

  return formatter.format(amount / 100);
}
