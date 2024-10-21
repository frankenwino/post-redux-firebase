import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { Text } from "react-native-paper";
import AddScreen from "../screens/AddScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Add: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Add")}>
              <Text>+</Text>
            </Pressable>
          ),
        })}
      />
      <RootStack.Screen name="Add" component={AddScreen} />
    </RootStack.Navigator>
  );
}
