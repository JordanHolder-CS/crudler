import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Modules"
        screenOptions={{
          headerStyle: { backgroundColor: "rgba(0, 0, 0, 1)" },
          headerTintColor: "#ffffffff",
        }}
      >
        <Stack.Screen
          name="Modules"
          component={ModuleListScreen}
          options={{ title: "Module List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
