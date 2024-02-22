import { Stack } from "expo-router";
import { useState, createContext } from "react";

export const PlayingContext = createContext(null);

const Layout = () => {
  const [playing, setPlaying] = useState({
    title: null,
    fileName: null,
    length: null,
    timeStamp: null,
    id: null,
  });
  return (
    <PlayingContext.Provider value={{ playing, setPlaying }}>
      <Stack />
    </PlayingContext.Provider>
  );
};

export default Layout;
