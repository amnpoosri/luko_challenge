import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { ImagePickerSdk } from "../sdk/ImagePickerSdk";
import { colors } from "../theme/colors";
import CircularImage from "./images/circular_image";
import { Typography } from "./Typography";

interface Props {
  onImageDeletePress: () => void;
  onImagePicked: (imageUri: string) => void;
  size?: number;
  imageUri?: string;
}

export const ImagePicker: FC<Props> = ({
  onImagePicked,
  onImageDeletePress,
  size = 96,
  imageUri,
}) => {
  const onAddPhotoPress = () => {
    ImagePickerSdk.pickImage().then((imageResult) => {
      const uri = imageResult?.uri;

      if (uri) {
        onImagePicked(uri);
      }
    });
  };

  // TODO: Add support for camera and image picker
  const renderAddPhotoView = () => (
    <TouchableOpacity
      style={[
        styles.placeHolderContainer,
        { height: size, width: size, borderRadius: size / 2 },
      ]}
      onPress={onAddPhotoPress}
    >
      <MaterialCommunityIcons
        name={"camera"}
        size={44}
        color={colors.mainBlue}
      />
      <Typography variant={"paragraph17"} style={[{ color: "black" }]}>
        Add photo
      </Typography>
    </TouchableOpacity>
  );

  const renderImage = (uri: string) => {
    const deleteContainerSize = size * 0.2133;

    return (
      <View>
        <CircularImage imageUrl={uri} size={size} />

        <TouchableOpacity
          style={[
            {
              height: deleteContainerSize,
              width: deleteContainerSize,
              borderRadius: deleteContainerSize / 2,
            },
            styles.deleteIconContainer,
          ]}
          onPress={onImageDeletePress}
        >
          <MaterialCommunityIcons name={"delete"} size={20} color={"white"} />
        </TouchableOpacity>
      </View>
    );
  };

  return imageUri ? renderImage(imageUri) : renderAddPhotoView();
};

const styles = StyleSheet.create({
  placeHolderContainer: {
    borderStyle: "dotted",
    borderColor: colors.gray[100],
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteIconContainer: {
    backgroundColor: colors.terracota,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
