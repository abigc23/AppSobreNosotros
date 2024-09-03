import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import imagenes from '../../imagenes'

const aguero = () => {
  return (
    <ScrollView className="">
      <View className="p-5 bg-[#ACD5D8]">
        <Text className="text-xl font-bold border-b mb-4">Mati "El Pochola" Aguero</Text>
        <View className="flex flex-row py-5 items-center justify-center">
          <Image className="w-40 h-40 rounded-[20px] border p-3" source={imagenes.traficante}/>
          <View className="flex flex-col text-justify p-5 ml-3 items-left justify-center">
            <Text className="text-s font-medium">{`\u2022`} Nombre: Mati Aguero</Text>
            <Text className="text-s font-medium">{`\u2022`} Apodo: "El Pochola"</Text>
            <Text className="text-s font-medium">{`\u2022`} Edad: 18 tiros</Text>
            <Text className="text-s font-medium">{`\u2022`} Estado Civil: Buscado</Text>
            <Text className="text-s font-medium">{`\u2022`} Nacionalidad: River Plate</Text>
          </View>
        </View>
        <View className="pt-10 text-left">
          <Text className="font-medium text-xl text-center border-b mb-3">  Mati, mas conocido como "El Pochola" es un conocido traficante del barrio de la 13.</Text>
          <Image className="w-40 h-40 flex self-center p-5 justify-center mb-5 mt-5" source={imagenes.caquita} />
          <Text className="p-2">  Debe su apodo a su curiosa forma de llamar a su mercancia, quien ademas es un hacker muy peligroso.</Text>
          <Text className="p-2">  Lo conocen por sus repetidos intentos de hackear la laptop de un compañero, sin exito.</Text>
          <Image className="w-40 h-40 flex self-center p-5 justify-center mb-5 mt-5" source={imagenes.baño} />
          <Text className="p-2">  Testigos ateciguan de forma flatulenta la falta de binarios en su domicilio sobre calle Arcos y Celosas.</Text>
          <Text className="p-2">  Las autoridades, tanto federales como gendarmeria, recomiendan mantenerse alejado de este individuo.</Text>
          <Text className="p-2">  Se lo ha visto en las inmediaciones de la ruta Av. Ezeiza - Cañuelas, levantando gente y trabas como uber, esto es contado de primera mano por uno de los empleados de peaje que se negó a darnos su nombre pero sabemos su apellido: Lean. </Text>
          <Image className="w-40 h-40 flex self-center p-5 justify-center mb-5 mt-5" alt='fotos que lo vinculan con la razon de su malintencionar' source={imagenes.pelado} />
          <Text className="p-2">  Varias fuentes, cuentan de primera mano su alta experiencia en el manejo de armas debido a su entrenamiento intensivo es un campo de entrenamiento virtual conocido como el PUBG, Practicas Utilitarias Guerrilleras, un sistema de alta capacidad intelectual diseñado para la proliferacion de cyber crimen originada en San Juan, como proyecto escolar de cuarto año.</Text>
          <Text className="p-2">  Esta entrenado en las artes marciales de Pitón (Python), durante la primaria se lo ha visto emplear su tecnica secreta de movimientos misticos que programan la mente de sus adversarios y los reducen en un console.log</Text>
          <Image className="w-40 h-40 flex self-center p-5 justify-center mb-5 mt-5" alt='fotos que lo vinculan con la razon de su malintencionar' source={imagenes.piquito} />
          <Text className="p-2">  Su banda, los Llamas De Mergencia, utilizan el siguiente gesto como muestra de poder y dominancia frente a sus adversarios.</Text>
          <Text className="p-2">  Algunas de sus frases son:</Text>
          <View className="list-disc pl-7">
            <Text className="text-sm">{`\u2022`} "bien ahi padre";</Text>
            <Text className="text-sm">{`\u2022`} "bersachi brrr";</Text>
            <Text className="text-sm">{`\u2022`} "quiero ser Pitón Div Eluper";</Text>
            <Text className="text-sm">{`\u2022`} "leal hasta la muelte";</Text>
            <Text className="text-sm">{`\u2022`} "voy a pasarme a arcos";</Text>
            <Text className="text-sm">{`\u2022`} "te amo mati";</Text>
            <Text className="text-sm">{`\u2022`} "quiero un polo, 20 palos me sale";</Text>
            <Text className="text-sm">{`\u2022`} "voy a vender las vacas".</Text>
          </View>
        </View>
        </View>
    </ScrollView>
  )
}

export default aguero