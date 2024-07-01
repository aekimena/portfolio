import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Projects } from "./screens/projects";
import { ProjectDetails } from "./screens/projectDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { width } = Dimensions.get("window");

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded, error] = useFonts({
    Bold: require("./assets/font/MontserratAlternates-Regular.ttf"),
    Regular: require("./assets/font/MontserratAlternates-Light.ttf"),
  });

  if (!loaded && !error) {
    return <View style={{ flex: 1, backgroundColor: "#131313" }} />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={Projects} name="Projects" />
        <Stack.Screen component={ProjectDetails} name="ProjectDetails" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
