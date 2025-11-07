import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useEffect } from "react";
import API from "../API/API.js";
import Icons from "../UI/Icons.js";
import { BaseButton, ButtonTray } from "../UI/Button.js";
import Form from "../UI/Form.js";

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleName: null,
  ModuleCode: null,
  ModuleLevel: null,
  ModuleYearID: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImageURL:
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

const levels = [
  { value: 3, label: "3 (Foundation)" },
  { value: 4, label: "4 (First year)" },
  { value: 5, label: "5 (Second year)" },
  { value: 6, label: "6 (Final year)" },
  { value: 7, label: "7 (Masters)" },
];

const years = [
  { value: 1, label: "Local 2022-23" },
  { value: 2, label: "Local 2023-24" },
  { value: 3, label: "Local 2024-25" },
  { value: 4, label: "Local 2025-26" },
];

const yearsEndpoint = "https://softwarehub.uk/unibase/api/years";

const ModuleForm = ({ originalModule, onSubmit, onCancel, isLoading }) => {
  const [module, setModule] = useState(originalModule || defaultModule);
  const [years, setYears] = useState([]);
  const [isYearsLoading, setIsYearsLoading] = useState(true);

  const loadYears = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsYearsLoading(false);
    if (response.isSuccess) setYears(response.result);
  };
  useEffect(() => {
    loadYears(yearsEndpoint);
  }, []);

  const handleSubmit = () => onSubmit(module);
  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  const cohort = years.map((year) => ({
    value: year.YearID,
    label: year.YearName,
  }));

  return (
    <Form
      style={styles.formContainer}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitLabel={originalModule ? "Modify" : "Add"}
      Icons={originalModule ? <Icons.Edit /> : <Icons.Add />}
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
      <Form.InputSelect
        label="Module Level"
        prompt="Select module level..."
        options={levels}
        value={module.ModuleLevel}
        onChange={(value) => handleChange("ModuleLevel", value)}
      />
      <Form.InputSelect
        label="Module Year"
        prompt="Select module year..."
        options={cohort}
        value={module.ModuleYearID}
        onChange={(value) => handleChange("ModuleYearID", value)}
      />
      <Form.InputText
        label="Module Leader"
        value={module.ModuleLeaderName}
        onChange={(value) => handleChange("ModuleLeaderName", value)}
      />
      <Form.InputText
        label="Image URL"
        value={module.ModuleImageURL}
        onChange={(value) => handleChange("ModuleImageURL", value)}
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
