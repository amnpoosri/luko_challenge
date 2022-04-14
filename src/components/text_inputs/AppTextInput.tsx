import React, { forwardRef, VFC } from "react";
import { TextInput, TextInputProps, View, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

import { Typography } from "../Typography";

interface Props extends TextInputProps {
  title: string;
}

const AppTextInput = forwardRef<TextInput, Props>(
  ({ title, style, ...rest }, ref) => {
    return (
      <View>
        <Typography style={styles.titleText} variant={"paragraph13Bold"}>
          {title}
        </Typography>
        <TextInput
          ref={ref}
          style={[styles.textInput, style]}
          placeholderTextColor={colors.gray[300]}
          allowFontScaling={false}
          editable={true}
          textAlignVertical={"top"}
          underlineColorAndroid={"transparent"}
          clearButtonMode={"while-editing"}
          {...rest}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  titleText: {
    marginBottom: 5,
  },
  textInput: {
    height: 48,
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: colors.gray[100],
  },
});

export default AppTextInput;
