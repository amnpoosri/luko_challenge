import { useState } from "react";
import { Constants } from "../../../constant/Constant";
import { calculatInventoryTotal } from "../inventory";
import { Inventory } from "../types/Type";

export interface UseInventory {
  inventories: Inventory[];
  addInventory: (inventory: Inventory) => void;
  getInventoryTotal: () => number;
}

const useInventory = (): UseInventory => {
  const [inventories, setInventories] = useState<Inventory[]>(
    Constants.INITIAL_INVENTORIES
  );

  const getInventoryTotal = () => calculatInventoryTotal(inventories);

  const addInventory = (inventory: Inventory): void => {
    setInventories([inventory, ...inventories]);
  };

  return {
    inventories,
    addInventory,
    getInventoryTotal,
  };
};

export default useInventory;
