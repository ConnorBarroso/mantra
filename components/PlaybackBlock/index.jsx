import { useContext } from "react";
import { View, Text } from "react-native";
import PlaybackBlockStyles from "./PlaybackBlock.styles";
import { PlayingContext } from "../../app/_layout";
const { container } = PlaybackBlockStyles;
const PlaybackBlock = () => {
  const media = useContext(PlayingContext).playing;
  return (
    <View style={container}>
      <Text>Now Playing {media?.title}</Text>
    </View>
  );
};

export default PlaybackBlock;
