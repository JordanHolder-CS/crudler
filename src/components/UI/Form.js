import { useEffect, useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { BlurView } from "expo-blur";
import { Picker } from "@react-native-picker/picker";
import { BaseButton, ButtonTray } from "./Button.js";
import Icons from "./Icons.js";
const Form = ({
  children,
  onSubmit,
  onCancel,
  submitLabel,
  submitIcon,
  isLoading,
}) => {
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
const InputSelect = ({
  label,
  prompt,
  options,
  value,
  onChange,
  isLoading,
}) => {
  const [iosPickerVisible, setIosPickerVisible] = useState(false);
  const showPlaceholderOption =
    !!prompt && !options.some((option) => option.value === null);
  const [pendingValue, setPendingValue] = useState(value ?? null);
  const selectedOption = options.find((option) => option.value === value);
  const displayLabel = selectedOption ? selectedOption.label : prompt;
  useEffect(() => {
    if (iosPickerVisible) {
      if (value !== null && value !== undefined) {
        setPendingValue(value);
      } else {
        setPendingValue(options[0]?.value ?? null);
      }
    }
  }, [iosPickerVisible, value, options]);
  const handleConfirm = () => {
    onChange(pendingValue);
    setIosPickerVisible(false);
  };
  if (Platform.OS === "ios") {
    return (
      <View style={styles.item}>
        <Text style={styles.itemLabel}> {label}</Text>
        <Pressable
          style={styles.iosPickerButton}
          onPress={() => setIosPickerVisible(true)}
        >
          <Text
            style={[
              styles.iosPickerButtonText,
              !selectedOption && styles.ItemPickerPromptStyle,
            ]}
          >
            {displayLabel}
          </Text>
          <Icons.ChevronDown />
        </Pressable>
        <Modal
          transparent
          animationType="slide"
          visible={iosPickerVisible}
          onRequestClose={() => setIosPickerVisible(false)}
        >
          <View style={styles.iosPickerOverlay}>
            <BlurView
              intensity={30}
              tint="dark"
              pointerEvents="none"
              style={styles.iosPickerBlur}
            />
            <Pressable
              style={styles.iosPickerDismissArea}
              onPress={() => setIosPickerVisible(false)}
            />
            <View style={styles.iosPickerModal}>
              <View style={styles.iosPickerToolbar}>
                <Text style={styles.iosPickerPrompt}>
                  {isLoading ? <Text>Loading records...</Text> : prompt}
                </Text>
                <Pressable onPress={handleConfirm}>
                  <Text style={styles.iosPickerDoneText}>Done</Text>
                </Pressable>
              </View>
              <Picker
                selectedValue={pendingValue}
                onValueChange={(itemValue) => setPendingValue(itemValue)}
                style={styles.iosPickerWheel}
              >
                {options.map((option, index) => (
                  <Picker.Item
                    key={option.value ?? index}
                    value={option.value}
                    label={option.label}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <Picker
        mode="dropdown"
        selectedValue={value}
        onValueChange={onChange}
        style={styles.ItemPickerStyle}
      >
        {showPlaceholderOption && (
          <Picker.Item
            value={null}
            label={prompt}
            style={styles.ItemPickerPromptStyle}
          />
        )}
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
  item: {
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
  iosPickerButton: {
    height: 50,
    paddingHorizontal: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgrey",
    backgroundColor: "whitesmoke",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iosPickerButtonText: {
    fontSize: 16,
    color: "#333",
  },
  iosPickerOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
  },
  iosPickerBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  iosPickerDismissArea: {
    flex: 1,
    width: "100%",
  },
  iosPickerModal: {
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 12,
    paddingBottom: 24,
    paddingHorizontal: 12,
    width: "100%",
  },
  iosPickerToolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  iosPickerPrompt: {
    fontSize: 16,
    color: "grey",
  },
  iosPickerDoneText: {
    fontSize: 16,
    color: "#007aff",
    fontWeight: "600",
  },
  iosPickerWheel: {
    backgroundColor: "white",
  },
});
export default Form;
