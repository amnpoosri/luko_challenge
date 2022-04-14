import { VFC } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from "react-native";

const KeyboardDismissableView: VFC<ViewProps> = (props) => {
  const onPress = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback accessible={false} onPress={onPress}>
      <View style={props.style}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardDismissableView;
