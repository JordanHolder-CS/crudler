import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Icons from "../UI/Icons.js";
import { BaseButton, ButtonTray } from "../UI/Button.js";
import Form from "../UI/Form.js";

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

  return (
    <Form
      onSubmit={handleSubmit}
      submitLabel={"Add"}
      Icons={<Icons.Add />}
      style={styles.formContainer}
    >
      <Form.InputText
        label="Module Code"
        value={module.ModuleCode}
        onChange={(value) => handleChange("ModuleCode", value)}
      />
      <Form.InputText
        label="Module Name"
        value={module.ModuleName}
        onChange={(value) => handleChange("ModuleName", value)}
      />
      <Form.InputText
        label="Module Level"
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
      />
      <Form.InputText
        label="Module Leader"
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange("ModuleLeaderName", value)}
      />
      <Form.InputText
        label="Image URL"
        value={module.ModuleImage}
        onChange={(value) => handleChange("ModuleImage", value)}
      />
    </Form>
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
