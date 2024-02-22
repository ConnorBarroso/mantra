import { StyleSheet } from "react-native";

const SwipeButtonStyles = StyleSheet.create({
  container: {
    width: 200,
    flex: 0,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 5,
  },

  text: {
    textAlign: "center",
  },

  rename: {
    height: "90%",
    width: 60,
    backgroundColor: "green",
    padding: 5,
    justifyContent: "center",
    borderRadius: 5,
  },

  remove: {
    height: "90%",
    width: 60,
    backgroundColor: "red",
    padding: 5,
    justifyContent: "center",
    borderRadius: 5,
  },

  share: {
    height: "90%",
    width: 60,
    backgroundColor: "lightblue",
    padding: 5,
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default SwipeButtonStyles;
