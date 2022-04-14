import {
  cleanup as cleanupHooks,
  renderHook,
  act,
} from "@testing-library/react-hooks";

import useInventory from "../UseInventory";
import { Constants } from "../../../../constant/Constant";
import { inventory } from "../../fixtures/inventory";
describe("useInventory", () => {
  beforeEach(() => {
    cleanupHooks();
  });

  it("initial useInventory", () => {
    const { result } = renderHook(() => useInventory());

    expect(result.current.inventories).toEqual(Constants.INITIAL_INVENTORIES);
    expect(typeof result.current.addInventory).toBe("function");
    expect(typeof result.current.getInventoryTotal).toBe("function");
  });

  it("addInventory", () => {
    const { result } = renderHook(() => useInventory());
    const newInventory = inventory({
      id: 3,
      name: "Bracelet",
      description: "Red shinging bracelet",
      purchasePrice: 100,
      photo: "https://bracelet.com",
    });

    expect(result.current.inventories).toEqual(Constants.INITIAL_INVENTORIES);
    act(() => {
      result.current.addInventory(inventory(newInventory));
    });
    expect(result.current.inventories).toEqual([
      newInventory,
      ...Constants.INITIAL_INVENTORIES,
    ]);
  });

  it("getInventoryTotal", () => {
    const { result } = renderHook(() => useInventory());

    expect(result.current.getInventoryTotal()).toEqual(6630);
  });
});
