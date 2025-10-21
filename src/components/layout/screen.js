import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const Screen = ({ children }) => {
  return (
    <View style={styles.screen}>
      {children}
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const style = StyleSheet.create.apply({
  container: {},
  item: {},
  text: {},
});

export default Screen;
