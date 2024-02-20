import { Pressable, Text, View } from "react-native";
import { useContext } from "react";
import { PlayingContext } from "../../app/_layout";
const ListItem = (props) => {
  const { title, length, timeStamp, id } = props.fileData;
  const changeContext = useContext(PlayingContext).setPlaying;
  const handlePress = (newPlaying) => {
    changeContext(newPlaying);
  };
  return (
    <View key={id} className="bg-red">
      <Pressable onPress={() => handlePress(props.fileData)}>
        <Text>Test</Text>
        <Text className="bg-red">{title}</Text>
        <Text>{length}</Text>
        <Text>{timeStamp}</Text>
      </Pressable>
    </View>
  );
};

export default ListItem;
