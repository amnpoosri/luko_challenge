import { Alert } from "react-native";

export const showSingleButtonDialog = ({
  title,
  description,
  onPress,
}: {
  title: string;
  description?: string;
  onPress?: () => void;
}) =>
  Alert.alert(
    title,
    description,
    [
      {
        text: "ok",
        onPress: onPress,
      },
    ],
    { cancelable: false }
  );
