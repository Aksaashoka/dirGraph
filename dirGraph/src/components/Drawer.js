import React from 'react'
import { Text} from 'react-native'
import Directory from "./Directory"
import File from "./File"

  const Drawer = ({ item, level = 0 }) => {
    return (
      <Directory level={level}>
        <Text>{`${item.type}---${item.name}`}</Text>
        {item.files.map((nodeOrLeaf) =>(
            <>
              {nodeOrLeaf.type === "directory" && (
                <Drawer item={nodeOrLeaf} level={level + 1} />
              )}
              {nodeOrLeaf.type === "file" && <File file={nodeOrLeaf} />}
            </>
          ))}
      </Directory>)
  }

export default Drawer
