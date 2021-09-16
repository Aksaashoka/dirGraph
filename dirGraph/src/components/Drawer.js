import React from 'react'
import { StyleSheet} from 'react-native'
import { List } from 'react-native-paper'
import Directory from "./Directory"
import File from "./File"

  const Drawer = ({ item, level = 0 }) => {
    return (
      <List.Accordion
      title={item.name}
      style={styles.dir}
      left={props => <List.Icon {...props} icon="folder" />}>

        {/* <Text>{`${item.type}---${item.name}`}</Text> */}
        {item.files.map((nodeOrLeaf) =>(
            <>
              {nodeOrLeaf.type === "directory" && (
                <Drawer item={nodeOrLeaf} level={level + 1} />
              )}
              {nodeOrLeaf.type === "file" && <File style={styles.archive}file={nodeOrLeaf} />}
            </>
          ))}
      </List.Accordion>)
  }

  const styles = StyleSheet.create({
    dir: {
      marginTop:10,
      marginBottom:5,
    backgroundColor: "#E7E7E7"    
},
    archive:{
      backgroundColor: "#E7E7E7",
    paddingLeft: 10    }
  });

export default Drawer
