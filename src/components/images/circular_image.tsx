import { VFC } from "react";
import { StyleSheet, Image } from "react-native";

interface Props {
  imageUrl: string;
  size?: number;
}

const CircularImage: VFC<Props> = ({ imageUrl, size = 200 }) => {
  return (
    <Image
      source={{
        uri: imageUrl,
      }}
      style={{ width: size, height: size, borderRadius: size / 2 }}
    />
  );
};

export default CircularImage;
