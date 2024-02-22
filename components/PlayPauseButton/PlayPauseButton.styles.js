import { StyleSheet } from "react-native";
const PlayPauseButtonStyles = StyleSheet.create({
  highlight: {
    width: 80,
    height: 80,
  },
  textContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: "100%",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  },
  container: {
    width: 80,
    height: 80,
    borderRadius: "100%",
    borderWidth: 1,
    overflow: "hidden",
  },
});

export default PlayPauseButtonStyles;
