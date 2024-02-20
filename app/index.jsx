import { Stack } from "expo-router";
import { View } from "react-native";
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
      <TopContainer />
      <MantraList />
    </View>
  );
};
export default Home;
