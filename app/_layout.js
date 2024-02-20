import { Stack } from "expo-router";
import { useState, createContext } from "react";

export const PlayingContext = createContext(null);

const Layout = () => {
  const [playing, setPlaying] = useState(null);
  return (
    <PlayingContext.Provider value={{ playing, setPlaying }}>
      <Stack />
    </PlayingContext.Provider>
  );
};

export default Layout;
