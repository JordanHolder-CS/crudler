import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen";
import { DeleteButton, ModifyButton, ButtonTray } from "../UI/Button";
import FullWidthImage from "react-native-fullwidth-image";
import Icons from "../UI/Icons";

export const ModuleView = ({ module, onDelete }) => {
  const handleDelete = () => onDelete(module);
  const requestDelete = () =>
    Alert.alert(
      "Warning!",
      `Are you sure that you want to delete module ${module.ModuleCode} ${module.ModuleName}`,
      [{ text: "Cancel" }, { text: "Delete", onPress: handleDelete }]
    );
  return (
    <View style={styles.container}>
      <FullWidthImage
        source={{ uri: module?.ModuleImage }}
        style={styles.image}
      />
      <View style={styles.infoTray}>
        <Text style={styles.boldText}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
        <Text style={styles.text}>Level {module.ModuleLevel}</Text>
        <Text style={styles.text}>
          {module.ModuleLeaderName}{" "}
          <Text style={styles.dimText}>(Module Leader)</Text>
        </Text>
        <ButtonTray>
          <ModifyButton icon={<Icons.Edit />} label="Modify" />
          <DeleteButton
            icon={<Icons.Delete />}
            label="Delete"
            onPress={requestDelete}
          />
        </ButtonTray>
      </View>
    </View>
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
    //paddingHorizontal: 20,
    paddingVertical: 50,
  },
});

export default ModuleView;
