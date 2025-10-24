import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Screen from "../layout/screen.js";
import initialModules from "../../data/modules.js";
import ModuleList from "../Modules/ModuleList.js";

export const ModuleListScreen = ({ navigation }) => {
  const [modules, setModules] = useState(initialModules);

  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module });

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  //modules =
  console.log(
    `After deleting ${module.ModuleCode}, modules length is ${modules.length}`
  );

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
