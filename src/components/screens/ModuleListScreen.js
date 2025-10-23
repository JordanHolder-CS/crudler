import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen.js";
import initialModules from "../../data/modules.js";
import ModuleList from "../Modules/ModuleList.js";

export const ModuleListScreen = () => {
  const modules = initialModules;

  const handleSelect = () => alert("Course selected");

  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
