import { StyleSheet } from "react-native";

const PlaybackBlockStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
  },
  controlPanel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: 700,
  },
  text: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: 700,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  },
  titleContainer: {
    position: "relative",
    width: "100%",
    height: "30%",
    justifyContent: "center",
  },
  loopContainer: {
    height: 30,
    width: 70,
  },
  loopButton: {
    height: "100%",
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  activeLoopButton: {
    height: "100%",
    width: "100%",
    backgroundColor: "darkgrey",
    borderRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  recContainer: {
    height: 30,
    width: 70,
    borderRadius: 5,
    overflow: "hidden",
  },
  recButton: {
    height: "100%",
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default PlaybackBlockStyles;
