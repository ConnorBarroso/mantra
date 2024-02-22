import { Stack } from "expo-router";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import TopContainer from "../components/TopContainer";
import Header from "../components/Header";
import MantraList from "../components/MantraList";

const Home = () => {
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
