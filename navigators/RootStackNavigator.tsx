import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddScreen from "../screens/AddScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Add: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Add">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Add" component={AddScreen} />
    </RootStack.Navigator>
  );
}
