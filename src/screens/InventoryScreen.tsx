import { FlatList, StyleSheet, View } from "react-native";
import InventoryCard from "../components/cards/InventoryCard";
import { Title } from "../components/Title";
import { useInventoryContext } from "../domain/inventory/contexts/InventoryContext";
import { Inventory } from "../domain/inventory/types/Type";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const { inventories } = useInventoryContext();
  const handleAddButtonPress = () => navigation.navigate("AddItem");

  const renderItem = ({ item, index }: { item: Inventory; index: number }) => {
    if (index % 2) {
      return <InventoryCard item={item} style={styles.oddInventoryContainer} />;
    } else {
      return (
        <InventoryCard item={item} style={styles.evenInventoryContainer} />
      );
    }
  };

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>{route.name}</Title>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // set number of columns
        data={inventories}
        renderItem={renderItem}
        columnWrapperStyle={styles.inventoryListcolumnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
  inventoryListcolumnWrapper: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  oddInventoryContainer: {
    marginLeft: 10,
  },
  evenInventoryContainer: {
    marginRight: 10,
  },
});
