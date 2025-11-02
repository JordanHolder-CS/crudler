import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import ModuleItem from "./ModuleItem.js";

const ModuleList = ({ modules, onSelect }) => {
  return (
    <ScrollView style={styles.container}>
      {modules.map((module) => (
        <ModuleItem
          key={module.ModuleCode}
          module={module}
          onSelect={onSelect}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingHorizontal: 20,
  },
});

export default ModuleList;
