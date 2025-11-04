import { MaterialIcons } from "@expo/vector-icons";
const Icons = {};
const Add = () => <MaterialIcons name="add" size={16} />;
const Close = () => <MaterialIcons name="close" size={16} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Submit = () => <MaterialIcons name="check" size={16} />;
const ChevronDown = () => <MaterialIcons name="arrow-drop-down" size={20} />;
// Compose
Icons.Add = Add;
Icons.Close = Close;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Submit = Submit;
Icons.ChevronDown = ChevronDown;
export default Icons;
