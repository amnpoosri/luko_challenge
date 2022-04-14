import { Inventory } from "../types/Type";

export const inventory = (x: Partial<Inventory> = {}): Inventory => ({
  id: 1,
  name: "Cartier ring",
  purchasePrice: 0,
  type: "JEWELRY",
  description: "Gift from my grandfather",
  photo: "https://example.jpg",
  ...x,
});
