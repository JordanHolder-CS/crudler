import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Icons from "../UI/Icons.js";
import { BaseButton, ButtonTray } from "../UI/Button.js";

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

const ModuleForm = ({ onSubmit, onCancel }) => {
  const [module, setModule] = useState(defaultModule);
  const handleSubmit = () => onSubmit(module);
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  const submitLabel = "Add";
  const submitIcon = <Icons.Add />;
  return (
    <View style={styles.formContainer}>
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
        <BaseButton
          label={submitLabel}
          icon={submitIcon}
          onPress={handleSubmit}
        />
        <BaseButton label="Cancel" icon={<Icons.Close />} onPress={onCancel} />
      </ButtonTray>
    </View>
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

export default ModuleForm;
