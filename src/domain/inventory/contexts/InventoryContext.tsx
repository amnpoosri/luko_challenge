import { createContext, useContext } from "react";
import useInventory, { UseInventory } from "../hooks/UseInventory";

export const InventoryContext = createContext<UseInventory>({
  inventories: [],
  addInventory: () => {},
  getInventoryTotal: () => 0,
});

type Props = {
  children?: JSX.Element;
};

/**
 * Provider to provide value to all children.
 */
export const InventoryProvider = ({ children }: Props) => {
  const { inventories, addInventory, getInventoryTotal } = useInventory();

  return (
    <InventoryContext.Provider
      value={{
        inventories,
        addInventory,
        getInventoryTotal,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventoryContext = () => {
  return useContext(InventoryContext);
};
