import { FlatList, View, Text, TouchableHighlight } from "react-native";
import { useContext } from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { PlayingContext } from "../../app/_layout";
import { arrData } from "../../data";
import ListItem from "../ListItem/index";
import SwipeButtons from "../SwipeButtons";
import MantraListStyles from "./MantraList.styles";

const { container, list, separator } = MantraListStyles;
const MantraList = () => {
  const changeContext = useContext(PlayingContext).setPlaying;
  const handlePress = (newPlaying) => {
    changeContext(newPlaying);
  };

  return (
    <View style={container}>
      <FlatList
        data={arrData}
        keyExtractor={(item) => item?.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={<View style={separator} />}
        renderItem={({ item }) => (
          <TouchableHighlight
            activeOpacity={0.85}
            underlayColor="darkgrey"
            onPress={() => handlePress(item)}
          >
            <Swipeable
              renderRightActions={(progress, dragX) => <SwipeButtons />}
              overshootRight={false}
              rightOpenValue={-200}
            >
              <ListItem fileData={item} />
            </Swipeable>
          </TouchableHighlight>
        )}
        style={list}
      />
    </View>
  );
};

export default MantraList;
