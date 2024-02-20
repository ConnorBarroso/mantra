import { Text, View } from "react-native";
import ListItemStyles from "./ListItem.styles";

const { container } = ListItemStyles;
const ListItem = (props) => {
  const { title, length, timeStamp, id } = props.fileData;

  return (
    <View key={id} style={container}>
      <Text>{title}</Text>
      <Text>{length}</Text>
      <Text>{timeStamp}</Text>
    </View>
  );
};

export default ListItem;
