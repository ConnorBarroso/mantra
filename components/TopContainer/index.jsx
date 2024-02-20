import { useContext } from "react";
import { View, Text } from "react-native";
import RecordingBlock from "../RecordBlock";
import PlaybackBlock from "../PlaybackBlock";
import styles from "./TopContainer.styles";
import { PlayingContext } from "../../app/_layout";
const TopContainer = () => {
  const media = useContext(PlayingContext).playing;

  return (
    <View style={styles.container}>
      {media ? <PlaybackBlock /> : <RecordingBlock />}
    </View>
  );
};

export default TopContainer;
