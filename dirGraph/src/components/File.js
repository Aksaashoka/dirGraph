import React from "react"
import {Text} from "react-native";
import { List } from "react-native-paper";
const File = ({ file }) =>  <List.Item icon="folder"title={file.name} />;
export default File

