const CURRENCY_FORMATTER = Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export const formatCurrency = (value: number) => {
  return CURRENCY_FORMATTER.format(value);
};
