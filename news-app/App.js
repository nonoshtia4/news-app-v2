import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text } from "react-native";
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
