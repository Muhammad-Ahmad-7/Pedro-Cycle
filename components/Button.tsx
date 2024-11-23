import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'

const Button = ({title}: {title: string}) => {
    const width = useWindowDimensions().width
  return (
    <View style={{backgroundColor: colors.lightOrange, paddingVertical: 15, width: width/1.1, borderRadius: 50}}>
      <Text style={{color: 'white', textAlign: 'center', fontSize: 22, fontWeight: 'bold'}}>{title}</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})