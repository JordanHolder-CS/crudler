import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Screen from "../layout/screen";
import ModuleForm from "../Modules/ModuleForm";

export const ModuleAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;

  const handleCancel = navigation.goBack;

  return (
    <Screen>
      <ModuleForm onSubmit={onAdd} onCancel={handleCancel} />
    </Screen>
  );
};

export default ModuleAddScreen;
