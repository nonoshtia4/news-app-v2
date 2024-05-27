import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text, ScrollView, SafeAreaView } from "react-native";
import { ListItem } from "./components/ListItem";
import articles from "./dummies/articles";

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        imamgeUrl={article.urlToImage}
        title={article.title}
        author={article.author}
        key={index.toString()}
      />
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{items}</ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
  },
  box: {
    width: 100,
    height: 100,
  },
});
