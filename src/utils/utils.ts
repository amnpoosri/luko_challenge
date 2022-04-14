export const isEmptyString = <T>(value: T | null | undefined): boolean =>
  typeof value !== "string" || !value || value.trim().length === 0;

export const formatPrice = (price: number, toPrecision = 2): string =>
  `€` +
  price.toFixed(toPrecision).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");

export const isNumber = (x: unknown): x is number => Number.isFinite(x);
