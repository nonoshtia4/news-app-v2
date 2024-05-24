import { StyleSheet, Image, View, Text } from "react-native";

export const ListItem = () => {
  const sampleText =
    "Lorem ipsum dolar sit amet, consectetur adipiscing edit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "https://picsum.photos/id/10/300/300" }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3}>{sampleText}</Text>
        <Text style={styles.subText}>ReactNews</Text>
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
