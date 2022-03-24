import React from 'react'
import { View, Text } from 'react-native'

export default function AppCenterView({children, style}) {
    return (
        <View style={[{alignItems:'center', justifyContent:'center'}, style]}>
            {children}
        </View>
    )
}
