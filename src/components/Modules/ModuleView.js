import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layout/screen";
import FullWidthImage from "react-native-fullwidth-image";

export const ModuleView = ({ module }) => {
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
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
});

export default ModuleView;
