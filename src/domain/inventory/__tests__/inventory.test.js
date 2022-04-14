import { calculatInventoryTotal } from "../inventory";
import { inventory } from "../fixtures/inventory";
it(`calculatInventoryTotal`, () => {
  const items = [
    inventory({ purchasePrice: 5780 }),
    inventory({ purchasePrice: 850 }),
    inventory({ purchasePrice: 850 }),
  ];

  expect(calculatInventoryTotal(items)).toEqual(7480);
});
