import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState, useEffect } from "react";
import Icons from "../UI/Icons";
import Screen from "../layout/screen.js";
import ModuleList from "../Modules/ModuleList.js";
import { BaseButton, ButtonTray } from "../UI/Button.js";
import API from "../API/API.js";
//import { Button } from "react-native-web";

export const ModuleListScreen = ({ navigation }) => {
  const handleAdd = (module) => setModules([...modules, module]);

  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadModules = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setModules(response.result);
  };
  useEffect(() => {
    loadModules(modulesEndpoint);
  }, []);

  const handleModify = (updatedModule) =>
    setModules(
      modules.map((module) =>
        module.ModuleID === updatedModule.ModuleID ? updatedModule : module
      )
    );

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
      {isLoading && <Text>Loading records...</Text>}

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
