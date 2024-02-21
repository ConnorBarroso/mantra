import { Pressable, View } from "react-native";
const SwipeButtons = () => {
  const handleShare = () => {};

  const handleRename = () => {};

  const handleDelete = () => {};
  return (
    <View>
      <Pressable onPress={handleRename}>Rename</Pressable>
      <Pressable onPress={handleShare}>Share</Pressable>
      <Pressable onPress={handleDelete}>Delete</Pressable>
    </View>
  );
};

export default SwipeButtons;
