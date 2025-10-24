import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ModuleListScreen from "./src/components/screens/ModuleListScreen";
import ModuleAddScreen from "./src/components/screens/ModuleAddScreen";
import ModuleViewScreen from "./src/components/screens/ModuleViewScreen";
import ModuleModifyScreen from "./src/components/screens/ModuleModifyScreen";

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
        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add Module" }}
        />
        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View Module" }}
        />
        <Stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify Module" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
