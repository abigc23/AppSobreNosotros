import { Link } from "expo-router";
import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Link className="bg-gray-300 p-10 m-5 rounded-xl w-[300px] text-center font-semibold border" href="mayo"><Text >Mayo</Text></Link>
      <Link className="bg-gray-300 p-10 m-5 rounded-xl w-[300px] text-center font-semibold border" href="abi"><Text >Abi</Text></Link>
      <Link className="bg-gray-300 p-10 m-5 rounded-xl w-[300px] text-center font-semibold border" href="aguero"><Text >Aguero</Text></Link>
    </View>
  )
}

export default index