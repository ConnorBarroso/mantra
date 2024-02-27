import { Stack } from "expo-router";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Audio } from "expo-av";
import { openSettings } from "expo-linking";
import TopContainer from "../components/TopContainer";
import Header from "../components/Header";
import MantraList from "../components/MantraList";
import { handleDirectory } from "./utils/fileHandler";
import ErrorPopup from "../components/ErrorPopup";

const Home = () => {
  const [res, req] = Audio.usePermissions();
  const handlePermission = async () => {
    if (res === null || undefined) {
      await req();
    }
  };
  handleDirectory();

  useEffect(() => {
    if (res === null || res === undefined) {
      handlePermission();
    } else if (res.granted === false) {
      console.error("permission rejected");
      setError("permission rejected");
    } else if (res.granted === true && error === "permission rejected") {
      setError("");
    }
  }, [res]);

  const [error, setError] = useState("");

  const errorHandler = () => {
    let solution;
    if (error === "permission rejected") {
      solution = openSettings;
    }
    solution();
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { display: "none" },
          headerShown: false,
          headerTitle: "",
        }}
      />
      <Header />
      {error !== "" && <ErrorPopup error={error} errorHandler={errorHandler} />}
      <GestureHandlerRootView
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TopContainer />
        <MantraList />
      </GestureHandlerRootView>
    </View>
  );
};
export default Home;
