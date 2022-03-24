import React from 'react'
import { View } from 'react-native'

export default function TopImageWrapper({children}) {
    return (
        <View
        style={{
            alignItems: "center",
            justifyContent: "center",
            marginBottom:30
          }}
        >
            {children}
        </View>
    )
}
