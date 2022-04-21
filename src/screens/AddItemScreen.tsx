import React, { useMemo, useRef, useState } from "react";
import {
  InteractionManager,
  Keyboard,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import Button from "../components/Button";
import { ImagePicker } from "../components/ImagePicker";
import AppTextInput from "../components/text_inputs/AppTextInput";
import KeyboardDismissableView from "../components/views/KeyboardDimissableView";
import { useInventoryContext } from "../domain/inventory/contexts/InventoryContext";
import { RootTabScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import { showSingleButtonDialog } from "../utils/dialog";
import { formatPrice, isEmptyString, isNumber } from "../utils/utils";

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const { inventories, addInventory, getInventoryTotal } =
    useInventoryContext();

  const inventoriesTotal = useMemo(getInventoryTotal, [inventories]);

  const nameRef = useRef<TextInput>(null);
  const purchasePriceRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);

  const [name, setName] = useState<string>("");
  const [purchasePrice, setPurchasePrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [imageUri, setImageUri] = useState<string | undefined>();

  const onSubmitEditingName = () => purchasePriceRef.current?.focus();
  const onSubmitEditingPrice = () => descriptionRef.current?.focus();
  const onSubmitEditingDescription = () => Keyboard.dismiss();

  const onImagePicked = (imageUri: string) => setImageUri(imageUri);

  const onDeleteImagePress = () => setImageUri(undefined);

  const onAddPress = () => {
    const price = parseFloat(purchasePrice);

    if (isEmptyString(imageUri)) {
      showSingleButtonDialog({
        title: "Fail to add new inventory",
        description: `Photo cannot be empty`,
      });
    } else if (isEmptyString(name)) {
      showSingleButtonDialog({
        title: "Fail to add new inventory",
        description: `Name cannot be empty`,
      });
    } else if (!isNumber(price)) {
      showSingleButtonDialog({
        title: "Fail to add new inventory",
        description: `Value cannot be empty or alphabets`,
      });
    } else if (price + inventoriesTotal > 40000) {
      showSingleButtonDialog({
        title: "Fail to add new inventory",
        description: `Total inventory exceed ${formatPrice(40000, 0)}`,
      });
    } else {
      addInventory({
        id: inventories.length,
        name,
        description,
        photo: imageUri!,
        purchasePrice: price,
      });

      InteractionManager.runAfterInteractions(() => {
        navigation.goBack();
      });
    }
  };

  return (
    <KeyboardDismissableView style={styles.container}>
      <ScrollView>
        <View style={styles.buttonsContainer}>
          <Button title="Cancel" onPress={() => navigation.goBack()} />
          <Button title="Add" onPress={onAddPress} />
        </View>

        <View style={styles.imageContainer}>
          <ImagePicker
            imageUri={imageUri}
            onImagePicked={onImagePicked}
            size={150}
            onImageDeletePress={onDeleteImagePress}
          />
        </View>

        <AppTextInput
          ref={nameRef}
          title={"Name"}
          placeholder={"Bracelet"}
          style={styles.textInput}
          autoCompleteType={"off"}
          autoCorrect={false}
          returnKeyType={"next"}
          onSubmitEditing={onSubmitEditingName}
          blurOnSubmit={false}
          onChangeText={setName}
        />
        <AppTextInput
          ref={purchasePriceRef}
          title={"Value (€)"}
          placeholder={"700"}
          keyboardType={"numeric"}
          style={styles.textInput}
          autoCompleteType={"off"}
          onSubmitEditing={onSubmitEditingPrice}
          onChangeText={setPurchasePrice}
          returnKeyType={Platform.OS === "ios" ? "done" : "next"}
          blurOnSubmit={false}
        />
        <AppTextInput
          ref={descriptionRef}
          title={"Value"}
          placeholder={"Description"}
          multiline
          numberOfLines={5}
          style={[styles.textInput, styles.valueTextInput]}
          autoCompleteType={"off"}
          returnKeyType={"done"}
          onChangeText={setDescription}
          onSubmitEditing={onSubmitEditingDescription}
        />
      </ScrollView>
    </KeyboardDismissableView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.gray[50],
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  imageContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  textInput: {
    marginBottom: 20,
  },
  valueTextInput: {
    height: 128,
  },
});
