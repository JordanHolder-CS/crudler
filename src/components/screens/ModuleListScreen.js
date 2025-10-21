import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen";
import initialModules from "../../data/modules.js";

export const ModuleListScreen = () => {
  const modules = initialModules;

  const handleSelect = () => alert("Course selected");

  return (
    <Screen>
      <ScrollView style={style.container}>
        {modules.map((module) => {
          return (
            <Pressable key={module.ModuleCode} onPress={handleSelect}>
              <View key={module.ModuleCode} style={style.item}>
                <Text style={style.text}>
                  {module.title} {module.ModuleName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

export const AlternativeModuleListScreen = () => {
  return (
    <Screen>
      <Text>List</Text>
    </Screen>
  );
};

const style = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    fontSize: 16,
  },
});

export default ModuleListScreen;
