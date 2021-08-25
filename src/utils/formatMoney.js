const formatter = Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
