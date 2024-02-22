import { StyleSheet } from "react-native";
const RecordButtonStyles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: "100%",
    borderWidth: 1,
    overflow: "hidden",
  },
  highlight: {
    width: 80,
    height: 80,
  },
  button: {
    height: "100%",
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  recordSymbol: {
    height: 50,
    width: 50,
    borderRadius: "100%",
    backgroundColor: "red",
    borderWidth: 3,
  },
  stopSymbol: {
    height: 50,
    width: 50,
    borderRadius: 5,
    backgroundColor: "red",
    borderWidth: 3,
  },
});

export default RecordButtonStyles;
