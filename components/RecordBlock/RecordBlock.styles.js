import { StyleSheet } from "react-native";
const RecordBlockStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    textAlign: "left",
    fontSize: 30,
    fontWeight: 700,
  },
  controlPanel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dummyButton: {
    height: 30,
    width: 70,
  },
  saveContainer: {
    height: 30,
    width: 70,
    borderRadius: 5,
    overflow: "hidden",
  },
  saveButton: {
    height: "100%",
    width: "100%",
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 700,
  },
});

export default RecordBlockStyles;
