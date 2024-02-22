import { View, TouchableHighlight } from "react-native";
import RecordButtonStyles from "./RecordButton.styles";
const { container, highlight, button, recordSymbol, stopSymbol } =
  RecordButtonStyles;

const RecordButton = (props) => {
  const { isRecording, handleToggle } = props;
  let symbol = recordSymbol;
  if (isRecording) symbol = stopSymbol;
  return (
    <View style={container}>
      <TouchableHighlight style={highlight} onPress={handleToggle}>
        <View style={button}>
          <View style={symbol}></View>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default RecordButton;
