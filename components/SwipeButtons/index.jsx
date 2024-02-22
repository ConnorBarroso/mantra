import { TouchableHighlight, View, Text } from "react-native";
import SwipeButtonStyles from "./SwipeButtons.styles";
const SwipeButtons = (id) => {
  const handleShare = () => {};

  const handleRename = () => {};

  const handleDelete = () => {};

  const { container, rename, share, remove, text } = SwipeButtonStyles;
  return (
    <View style={container}>
      <TouchableHighlight
        onPress={handleRename}
        style={{
          borderRadius: 5,
        }}
      >
        <View style={rename}>
          <Text style={text}>Edit</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={handleShare}
        style={{
          borderRadius: 5,
        }}
      >
        <View style={share}>
          <Text style={text}>Share</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={handleDelete}
        style={{
          borderRadius: 5,
        }}
      >
        <View style={remove}>
          <Text style={text}>Delete</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default SwipeButtons;
