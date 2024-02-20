import { FlatList, View, Text } from "react-native";
import { arrData } from "../../data";
import ListItem from "../ListItem/index";

const MantraList = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={arrData}
        renderItem={({ item }) => <ListItem fileData={item} />}
      />
    </View>
  );
};

export default MantraList;
