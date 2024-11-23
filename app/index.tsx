import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EmptyScreen from '@/components/EmptyScreen'
import Button from '@/components/Button'
import { router } from 'expo-router'
import colors from '@/constants/colors'

const index = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.darkBackground}}>
      <TouchableOpacity onPress={() => router.push('/cart')}>
        <Button title="Go to Cart" />
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})