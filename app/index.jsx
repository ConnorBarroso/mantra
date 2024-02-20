import { Stack } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";
import TopContainer from "../components/TopContainer";
import Header from "../components/Header";
import RecordingList from "../components/MantraList";
const Home = () => {
  const handleCallback = (fileToPlay) => {
    setPlaying(fileToPlay);
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
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
      <TopContainer media={playing} />
      <RecordingList callback={handleCallback} />
    </View>
  );
};
export default Home;
