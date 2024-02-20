import { FlatList, View, Text, TouchableHighlight } from "react-native";
import { useContext } from "react";
import { arrData } from "../../data";
import { PlayingContext } from "../../app/_layout";
import ListItem from "../ListItem/index";
import MantraListStyles from "./MantraList.styles";

const { container, list } = MantraListStyles;
const MantraList = () => {
  const changeContext = useContext(PlayingContext).setPlaying;
  const handlePress = (newPlaying) => {
    changeContext(newPlaying);
  };
  return (
    <View style={container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={arrData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.85}
            underlayColor="darkgrey"
            onPress={() => handlePress(props.fileData)}
          >
            <ListItem fileData={item} />
          </TouchableHighlight>
        )}
        style={list}
      />
    </View>
  );
};

export default MantraList;
