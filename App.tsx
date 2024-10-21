import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import RootStackNavigator from "./navigators/RootStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNavigator />
    </NavigationContainer>
  );
}
