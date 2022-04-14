import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { colors } from "../theme/colors";
import { fonts } from "../theme/fonts";

export type TextVariant =
  | "header19"
  | "paragraph13Bold"
  | "paragraph15"
  | "paragraph15Bold"
  | "paragraph17";

export interface TypographyProps extends TextProps {
  variant?: TextVariant;
}

const defaultStyles: StyleProp<TextStyle> = {
  color: colors.gray[1000],
  fontFamily: fonts.regular,
};

export const Typography: React.FC<TypographyProps> = (props) => {
  const variant = props.variant || "paragraph15";

  return (
    <Text {...props} style={[defaultStyles, textStyle[variant], props.style]}>
      {props.children}
    </Text>
  );
};

const textStyle: { [key in TextVariant]: Record<string, unknown> } = {
  header19: {
    fontFamily: fonts.regular,
    fontSize: 19,
    lineHeight: 26,
  },
  paragraph13Bold: {
    fontSize: 13,
    fontFamily: fonts.bold,
    lineHeight: 17,
  },
  paragraph15: {
    fontSize: 14,
    lineHeight: 20,
  },
  paragraph15Bold: {
    fontSize: 15,
    fontFamily: fonts.bold,
    lineHeight: 20,
  },
  paragraph17: {
    fontSize: 17,
    lineHeight: 24,
  },
};
