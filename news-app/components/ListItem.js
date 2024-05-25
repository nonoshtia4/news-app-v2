import { StyleSheet, Image, View, Text } from "react-native";

/**
 *
 * @param {
 *  imageUrl: 画像URL{string}
 *  title: タイトル{string}
 *  author: ニュース提供元{string}
 * } props
 * @returns
 */
export const ListItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: props.imageUrl }} />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3}>{props.title}</Text>
        <Text style={styles.subText}>{props.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    height: 100,
    widtth: "100%",
    flexDirection: "row",
    backgroundColor: "white",
  },
  leftContainer: {
    width: 100,
    backgroundColor: "green",
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
});
