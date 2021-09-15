import React from 'react'
import { Text, View } from 'react-native'
import Directory from "./Directory"
import File from "./File"

  const Drawer = ({ node, level = 0 }) => {
    return (
      <Directory level={level}>
        <Text>{`${node.type}---${node.name}`}</Text>
        {node.files && node.files.map((nodeOrLeaf) =>(
            <>
              {nodeOrLeaf.type === "directory" && (
                <Drawer node={nodeOrLeaf} level={level + 1} />
              )}
              {nodeOrLeaf.type === "file" && <File file={nodeOrLeaf} />}
            </>
          ))}
      </Directory>)
  }

export default Drawer
