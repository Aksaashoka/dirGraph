import React from "react"
import {Text} from "react-native";

const File = ({ file }) => <Text>{`${file.type}---${file.name}`}</Text>;
export default File

