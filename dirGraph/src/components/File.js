import React from 'react';
import {List} from 'react-native-paper';

const File = ({file}) => <List.Item icon="folder" title={file.name} />;

export default File;
