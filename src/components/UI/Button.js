import { Pressable, Text, StyleSheet, View } from "react-native";

// Reusable base button with optional style overrides
const BaseButton = ({ label, onPress, style, textStyle, icon, ...rest }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]} {...rest}>
      <View style={styles.innerRow}>
        {icon ? <View style={styles.iconWrapper}>{icon}</View> : null}
        <Text style={[styles.label, textStyle]}>{label}</Text>
      </View>
    </Pressable>
  );
};

const ModifyButton = (props) => (
  <BaseButton
    {...props}
    style={[styles.button, styles.modify, props.style]}
    textStyle={[styles.label, props.textStyle]}
  />
);

const DeleteButton = (props) => (
  <BaseButton
    {...props}
    style={[styles.button, styles.delete, props.style]}
    textStyle={[styles.label, styles.deleteLabel, props.textStyle]}
  />
);

export const ButtonTray = ({ children }) => {
  return <View style={styles.buttonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: 15,
    paddingVertical: 15,
  },

  button: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    flex: 1,
  },
  innerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginRight: 8,
  },
  modify: {
    backgroundColor: "white",
  },
  delete: {
    backgroundColor: "#d32f2f",
    borderColor: "#000000ff",
  },
  label: {
    fontSize: 16,
  },
  deleteLabel: {
    color: "white",
    fontWeight: "600",
  },
});

export { ModifyButton, DeleteButton, BaseButton };
export default BaseButton;
