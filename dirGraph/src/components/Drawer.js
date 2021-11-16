import React from 'react';
import {StyleSheet} from 'react-native';
import {List} from 'react-native-paper';
import File from './File';

const Drawer = ({item, level = 0}) => {
  const marginLeft = level * 10;
  return (
    <List.Accordion
      title={item.name}
      style={styles.dir}
      left={props => <List.Icon {...props} icon="folder" />}>
      {item.files?.map(nodeOrLeaf => (
        <>
          {nodeOrLeaf.type === 'directory' && (
            <Drawer
              style={{marginLeft}}
              key={nodeOrLeaf.name}
              item={nodeOrLeaf}
              level={level + 1}
            />
          )}
          {nodeOrLeaf.type === 'file' && (
            <File
              key={nodeOrLeaf.name}
              style={styles.archive}
              file={nodeOrLeaf}
            />
          )}
        </>
      ))}
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  dir: {
    backgroundColor: '#E7E7E7',
  },
  archive: {
    backgroundColor: '#E7E7E7',
    paddingLeft: 10
  }
});

export default Drawer;
