import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen";
import ModuleForm from "../Modules/ModuleForm";

export const ModuleModifyScreen = ({ navigation, route }) => {
  const { module, onDelete, onModify } = route.params;
  const handleCancel = () =>
    navigation.replace("ModuleViewScreen", { module, onDelete, onModify });
  return (
    <Screen>
      <ModuleForm
        originalModule={module}
        onSubmit={onModify}
        onCancel={handleCancel}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleModifyScreen;
