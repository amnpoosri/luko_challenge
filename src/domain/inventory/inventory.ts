import { Inventory } from "./types/Type";

export const calculatInventoryTotal = (inventories: Inventory[]) =>
  inventories.reduce(
    (prevValue, inventory) => prevValue + inventory.purchasePrice,
    0
  );
