import { Text, View } from "react-native";

const File = ({ file }) => <Text> {`${file.type}---${file.name}`}</Text>;
export default File