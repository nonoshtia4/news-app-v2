import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { store } from "./store";
import { Provider } from "react-redux";
import { HomeScreen } from "./screens/HomeScreen";
import { ArticleScreen } from "./screens/ArticleScreen";
import { ClipScreen } from "./screens/ClipScreen";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name == "HomeTab") {
      return <FontAwesome name="home" size={size} color={color} />;
    } else if (route.name === "ClipTab") {
      return <FontAwesome name="bookmark" size={size} color={color} />;
    }
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ headerShown: false, title: "Clip" }}
      />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Clip"
        component={ClipScreen}
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="Article"
        component={ArticleScreen}
        options={{ headerShown: false, title: "Clip" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ headerShown: false, tabBarLabel: "Home" }}
          />
          <Tab.Screen
            name="ClipTab"
            component={ClipStack}
            options={{ headerShown: false, tabBarLabel: "Clip" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
