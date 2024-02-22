import { View, Text, TouchableHighlight } from "react-native";
import PlayPauseButtonStyles from "./PlayPauseButton.styles";

const { container, textContainer, text } = PlayPauseButtonStyles;
const PlayPauseButton = (props) => {
  const { paused, handleToggle } = props;
  let message = "Pause";
  if (paused) message = "Play";

  return (
    <View style={container}>
      <TouchableHighlight
        onPress={() => handleToggle("paused")}
        style={{ borderRadius: 5 }}
      >
        <View style={textContainer}>
          <Text style={text}>{message}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PlayPauseButton;
