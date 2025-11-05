import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import Icons from "../UI/Icons";
import Screen from "../layout/screen.js";
import initialModules from "../../data/modules.js";
import ModuleList from "../Modules/ModuleList.js";
import { BaseButton, ButtonTray } from "../UI/Button.js";
//import { Button } from "react-native-web";

export const ModuleListScreen = ({ navigation }) => {
  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

  const [modules, setModules] = useState(initialModules);

  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };
  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    //navigation.navigate("Modules");
    //navigation.popToTop();
    navigation.replace("ModuleViewScreen", { module, onDelete, onModify });
  };

  const gotoViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
  const gotoAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  return (
    <Screen>
      <ButtonTray>
        <BaseButton label="Add" icon={<Icons.Add />} onPress={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingHorizontal: 20,
  },
});

export default ModuleListScreen;
