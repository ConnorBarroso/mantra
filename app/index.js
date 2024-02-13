import { Stack } from "expo-router";
import { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import RecordingList from "./components/RecordingList";
const Home = () => {
  const [playing, setPlaying] = useState({
    title: null,
    fileName: null,
    length: null,
    timeStamp: null,
    id: null,
  });

  const handleCallback = (fileToPlay) => {
    console.log("fired");
    setPlaying(fileToPlay);
  };
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "red" },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      />
      <View>
        {playing.title !== null ? (
          <View>
            <Text>Now playing {playing.title}</Text>
          </View>
        ) : (
          <Text>Please Select a file</Text>
        )}
      </View>
      <RecordingList callback={handleCallback} />
    </SafeAreaView>
  );
};
export default Home;
