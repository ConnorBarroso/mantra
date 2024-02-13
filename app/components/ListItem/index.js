import { Pressable, Text, View } from "react-native";
const ListItem = (props) => {
  const { title, fileName, length, timeStamp, id } = props.fileData;
  const callback = props.callback.callback;
  return (
    <View key={id} className="bg-red">
      <Pressable onPress={() => callback(props.fileData)}>
        <Text>Test</Text>
        <Text className="bg-red">{title}</Text>
        <Text>{length}</Text>
        <Text>{timeStamp}</Text>
      </Pressable>
    </View>
  );
};

export default ListItem;
