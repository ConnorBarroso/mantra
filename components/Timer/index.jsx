import { useState, useEffect, useRef } from "react";
import { Text } from "react-native";
import RecordBlockStyles from "../RecordBlock/RecordBlock.styles";
const { buttonText } = RecordBlockStyles;
const Timer = ({ isPaused, isRecording }) => {
  const [count, setCount] = useState(0);
  const displayTime = new Date(count * 1000).toISOString().slice(14, 19);
  let timeHandler = useRef();

  const countInc = () => {
    timeHandler.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };
  useEffect(() => {
    if (!isRecording) {
      setCount(0);
    }
    if (isPaused === true) {
      return;
    } else {
      countInc();
      return () => clearInterval(timeHandler.current);
    }
  }, [isPaused, isRecording]);

  return <Text style={buttonText}>{displayTime}</Text>;
};

export default Timer;
