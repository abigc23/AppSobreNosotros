import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
const index = () => {
  // return <Redirect href="Inicio"/>
  return (
    <View className="flex-1 items-center justify-between bg-gray-300">
      <Text className="font-bold text-4xl text-center mt-16 p-5">
        Equipo Linux
        </Text>
      <View className="w-screen flex items-center justify-center bg-gray-400 h-1/3">
        <Link href="Inicio" className=" text-center px-3 py-5 bg-gray-500 rounded-md w-[70%] m-5" >
            <TouchableOpacity>
              <Text className="text-xl">Ingresar</Text>
            </TouchableOpacity>
        </Link>
      </View>
      <StatusBar style='auto'></StatusBar>
    </View>
  )
}

export default index