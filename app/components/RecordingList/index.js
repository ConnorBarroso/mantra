import { FlatList, View, Text } from "react-native";
import { arrData } from "../utils";
import ListItem from "../ListItem/index";

const RecordingList = (callback) => {
  return (
    <View className="bg-red">
      <FlatList
        keyExtractor={(item) => item.id}
        data={arrData}
        renderItem={({ item }) => (
          <ListItem fileData={item} callback={callback} />
        )}
      />
    </View>
  );
};

export default RecordingList;
