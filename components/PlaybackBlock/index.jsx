import { useContext, useState } from "react";
import { View, Text, Pressable, TouchableHighlight } from "react-native";
import PlayPauseButton from "../PlayPauseButton";
import { PlayingContext } from "../../app/_layout";
import PlaybackBlockStyles from "./PlaybackBlock.styles";
const {
  container,
  titleContainer,
  title,
  text,
  buttonText,
  loopButton,
  activeLoopButton,
  loopContainer,
  controlPanel,
  recContainer,
  recButton,
} = PlaybackBlockStyles;
const PlaybackBlock = () => {
  const [paused, setPaused] = useState(false);
  const [loop, setLoop] = useState(false);
  const playingContext = useContext(PlayingContext);
  const media = playingContext.playing;
  const setPlaying = playingContext.setPlaying;
  const handleToggle = (label) => {
    if (label === "paused") {
      const newState = !paused;
      setPaused(newState);
    } else {
      const newState = !loop;
      setLoop(newState);
    }
  };

  const handleRecordButton = () => {
    const newState = {
      title: null,
      fileName: null,
      length: null,
      timeStamp: null,
      id: null,
    };

    setPlaying(newState);
  };

  let loopStyle = loopButton;
  if (loop) loopStyle = activeLoopButton;

  return (
    <View style={container}>
      <View style={titleContainer}>
        <Text style={text}>Now Playing</Text>
        <Text style={title}>{media?.title}</Text>
      </View>
      <View style={controlPanel}>
        <View style={loopContainer}>
          <Pressable onPress={() => handleToggle("loop")}>
            <View style={loopStyle}>
              <Text style={buttonText}>Loop</Text>
            </View>
          </Pressable>
        </View>

        <PlayPauseButton paused={paused} handleToggle={handleToggle} />

        <View style={recContainer}>
          <TouchableHighlight onPress={handleRecordButton}>
            <View style={recButton}>
              <Text style={buttonText}>Record</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default PlaybackBlock;
