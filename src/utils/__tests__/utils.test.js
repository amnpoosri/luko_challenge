import { isEmptyString, formatPrice, isNumber } from "../utils";
it(`isEmptyString`, () => {
  expect(isEmptyString(undefined)).toBe(true);
  expect(isEmptyString(null)).toBe(true);
  expect(isEmptyString("")).toBe(true);
  expect(isEmptyString(" ")).toBe(true);

  expect(isEmptyString("a ")).toBe(false);
});
it(`formatPrice`, () => {
  expect(formatPrice(100.22)).toEqual("€100.22");
  expect(formatPrice(1001.22)).toEqual("€1,001.22");
});

it(`isNumber`, () => {
  expect(isNumber(NaN)).toBe(false);
  expect(isNumber(false)).toBe(false);
  expect(isNumber("")).toBe(false);
  expect(isNumber(1)).toBe(true);
});
