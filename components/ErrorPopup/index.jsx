import { View, Text, Pressable } from "react-native";
import ErrorPopupStyles from "./ErrorPopup.styles";

const { container } = ErrorPopupStyles;
const ErrorPopup = ({ error, errorHandler }) => {
  return (
    <View style={container}>
      <Text>{error}</Text>
      <Pressable onPress={errorHandler}>
        <Text>Fix it</Text>
      </Pressable>
    </View>
  );
};

export default ErrorPopup;
