import React from 'react'
import { View, Text } from 'react-native'
import appValues from '../../constants/appValues'
import colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'

export default function AppForgotPasswordLine() {
    const navigation = useNavigation()
    return (
        <View style={{width:'100%'}}>
        <Text onPress={()=>navigation.navigate("forgotPassword")} style={{textAlign:'right', color:colors.primary, fontSize:appValues.fontSize}}>Forgot Password ?</Text>
      </View>
    )
}
