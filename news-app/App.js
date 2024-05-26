import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import { ListItem } from "./components/ListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imamgeUrl="https://picsum.photos/id/10/300/300"
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        author="ReactNews"
      />
      <ListItem
        imamgeUrl="https://picsum.photos/id/20/300/300"
        title="タイトル"
        author="Japanニュース"
      />
      <StatusBar style="auto" />
      <View style={[styles.box, { backgroundColor: "red" }]} />
      <View style={[styles.box, { backgroundColor: "blue" }]} />
      <View style={[styles.box, { backgroundColor: "green" }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eee",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 100,
  },
});
