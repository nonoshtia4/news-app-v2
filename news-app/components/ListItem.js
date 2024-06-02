import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
/**
 *
 * @param {
 *  imageUrl: 画像URL{string}
 *  title: タイトル{string}
 *  author: ニュース提供元{string}
 *  onPress: タップされた時の処理{function}
 * } props
 * @returns
 */
export const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.leftContainer}>
        {!!imageUrl && <Image style={{ width: 100, height: 100 }} source={{ uri: imageUrl }} />}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
