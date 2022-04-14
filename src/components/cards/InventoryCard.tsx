import { VFC } from "react";
import { View, StyleSheet, Image, StyleProp, ViewStyle } from "react-native";
import { Constants } from "../../constant/Constant";
import { Inventory } from "../../domain/inventory/types/Type";
import { colors } from "../../theme/colors";
import { formatPrice } from "../../utils/utils";
import { Typography } from "../Typography";

interface Props {
  item: Inventory;
  style?: StyleProp<ViewStyle>;
}

const InventoryCard: VFC<Props> = ({ item, style }) => {
  const { name, photo, purchasePrice } = item;

  const renderInfoView = (): JSX.Element => (
    <View style={styles.infoContainer}>
      <Typography
        variant={"header19"}
        ellipsizeMode={"tail"}
        numberOfLines={2}
      >{`${name}${Constants.TWO_LINE_CHAR_HACK}`}</Typography>
      <Typography variant={"paragraph15"} style={{ color: colors.gray[700] }}>
        {formatPrice(purchasePrice)}
      </Typography>
    </View>
  );

  return (
    <View style={[styles.card, style]}>
      <Image style={styles.image} source={{ uri: photo }} />
      {renderInfoView()}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: "#06080d",
    shadowRadius: 2,
    shadowOpacity: 0.12,
    borderRadius: 14,
    flex: 0.5,
    backgroundColor: "white",
  },
  image: {
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    flex: 1,
  },
  infoContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default InventoryCard;
