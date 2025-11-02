import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen";
import Icons from "../UI/Icons";
import { BaseButton, ButtonTray } from "../UI/Button.js";

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleName: "Mobile Appliction Development",
  ModuleCode: "CI6330",
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: "Graeme Jones",
  ModuleImage:
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

export const ModuleAddScreen = ({ navigation, route }) => {
  const { onAdd } = route.params;
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = navigation.goBack;

  return (
    <Screen>
      <ButtonTray>
        <BaseButton label="Add" icon={<Icons.Add />} onPress={handleAdd} />
        <BaseButton
          label="Cancel"
          icon={<Icons.Close />}
          onPress={handleCancel}
        />
      </ButtonTray>
      <Text>Add</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
