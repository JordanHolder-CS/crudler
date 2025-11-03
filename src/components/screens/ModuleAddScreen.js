import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Screen from "../layout/screen";
import Icons from "../UI/Icons";
import { BaseButton, ButtonTray } from "../UI/Button.js";
import { useState } from "react";

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleName: null,
  ModuleCode: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage:
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

export const ModuleAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;
  const [module, setModule] = useState(defaultModule);
  const handleAdd = () => onAdd(module);
  const handleCancel = navigation.goBack;
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });
  return (
    <Screen>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange("ModuleCode", value)}
          style={styles.itemTextInput}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange("ModuleName", value)}
          style={styles.itemTextInput}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Course Level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange("ModuleLevel", value)}
          style={styles.itemTextInput}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module Leader</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange("ModuleLeaderName", value)}
          style={styles.itemTextInput}
        />
      </View>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Image URL</Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange("ModuleImage", value)}
          style={styles.itemTextInput}
        />
      </View>
      <ButtonTray>
        <BaseButton label="Add" icon={<Icons.Add />} onPress={handleAdd} />
        <BaseButton
          label="Cancel"
          icon={<Icons.Close />}
          onPress={handleCancel}
        />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
});

export default ModuleAddScreen;
