import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen";
import FullWidthImage from "react-native-fullwidth-image";
import ModuleListScreen from "./ModuleListScreen";
import ModuleView from "../Modules/ModuleView.js";

export const ModuleViewScreen = ({ navigation, route }) => {
  const { module, onDelete, onModify } = route.params;

  const gotoModifyScreen = () =>
    navigation.replace("ModuleModifyScreen", { module, onModify });

  return (
    <Screen>
      <ModuleView
        module={module}
        onDelete={onDelete}
        onModify={gotoModifyScreen}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  infoTray: {
    gap: 5,
  },
  text: {
    fontSize: 10,
  },
  boldText: {
    fontSize: 19,
    fontWeight: "bold",
  },
  dimText: {
    color: "grey",
  },
  image: {
    borderRadius: 9,
  },
  container: {
    gap: 15,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
});

export default ModuleViewScreen;
