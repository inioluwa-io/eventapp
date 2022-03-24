import React from 'react'
import { View, Text } from 'react-native'

export default function AppPaddedView({children, style}) {
    return (
        <View style={[{flex:1, paddingHorizontal:20}, style]}>
            {children}
        </View>
    )
}
