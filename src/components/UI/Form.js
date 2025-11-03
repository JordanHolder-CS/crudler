import { StyleSheet, Text, TextInput, View } from "react-native";
import { BaseButton, ButtonTray } from "./Button.js";
import Icons from "./Icons.js";
import { Picker } from "@react-native-picker/picker";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formItems}>{children}</View>
      <ButtonTray>
        <BaseButton label={submitLabel} icon={submitIcon} onPress={onSubmit} />
        <BaseButton label="Cancel" icon={<Icons.Close />} onPress={onCancel} />
      </ButtonTray>
    </View>
  );
};

const InputText = ({ label, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        style={styles.itemTextInput}
      />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <Picker
        mode="dropdown"
        selectedValue={value}
        onValueChange={onChange}
        style={styles.ItemPickerStyle}
      >
        <Picker.Item
          value={null}
          label={prompt}
          style={styles.ItemPickerPromptStyle}
        />
        {options.map((option, index) => (
          <Picker.Item key={index} value={option.value} label={option.label} />
        ))}
      </Picker>
    </View>
  );
};

Form.InputText = InputText;
Form.InputSelect = InputSelect;

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
  formItems: {
    gap: 5,
  },
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  ItemPickerStyle: {
    height: 50,
    backgroundColor: "whitesmoke",
  },
  ItemPickerPromptStyle: {
    color: "grey",
  },
});

export default Form;
