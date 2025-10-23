import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const ModuleItem = ({ module, onSelect }) => (
  <Pressable onPress={() => onSelect(module)}>
    <View style={styles.item}>
      <Text style={styles.text}>
        {module.ModuleCode} {module.ModuleName}
      </Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    //paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "lightgrey",
    //alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
});

export default ModuleItem;
