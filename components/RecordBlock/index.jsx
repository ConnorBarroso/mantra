import { View, Text, TouchableHighlight } from "react-native";
import { useState } from "react";
import RecordButton from "../RecordButton";
import RecordBlockStyles from "./RecordBlock.styles";
import useTimer from "../../hooks/useTimer";

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
  const recordingTime = "00:00";
  const handleToggle = () => {
    const newState = !isRecording;
    setIsRecording(newState);
  };

  const handleSave = () => {
    console.log("SAVED!");
  };
  return (
    <View style={container}>
      <Text style={title}>Recording Page</Text>

      <View style={controlPanel}>
        <View style={saveContainer}>
          <Text style={buttonText}>{recordingTime}</Text>
        </View>
        <RecordButton isRecording={isRecording} handleToggle={handleToggle} />
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
