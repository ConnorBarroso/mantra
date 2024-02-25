import { View, Text, TouchableHighlight } from "react-native";
import { useEffect, useState } from "react";
import RecordButton from "../RecordButton";
import RecordBlockStyles from "./RecordBlock.styles";
import Timer from "../Timer";

const {
  container,
  title,
  controlPanel,
  saveContainer,
  saveButton,
  buttonText,
} = RecordBlockStyles;
const RecordingBlock = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const handleToggle = () => {
    if (!isRecording) {
      setIsRecording(true);
      setIsPaused(false);
    } else {
      const newState = !isPaused;
      setIsPaused(newState);
    }
  };

  const handleSave = () => {
    setIsRecording(false);
    setIsPaused(true);
    console.log("SAVED!");
  };
  return (
    <View style={container}>
      <Text style={title}>Recording Page</Text>

      <View style={controlPanel}>
        <View style={saveContainer}>
          <Timer isPaused={isPaused} isRecording={isRecording} />
        </View>
        <RecordButton isRecording={!isPaused} handleToggle={handleToggle} />
        <View style={saveContainer}>
          <TouchableHighlight onPress={handleSave}>
            <View style={saveButton}>
              <Text style={buttonText}>Save</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default RecordingBlock;
