import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import imagenes from "../../imagenes";

const MayolaScreen = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <ScrollView>
      <View className="p-5">
        <Text className="text-xl font-bold border-b mb-4">
          "La Pochola Mayor" Mayola
        </Text>
        <View className="flex flex-row py-5 items-center justify-center">
          <Image
            className="w-40 h-40 rounded-lg border p-3"
            source={imagenes.mayolay4}
          />
          <View className="flex flex-col text-justify p-5 border-b border-t ml-3 items-center justify-center">
            <Text className="text-xs font-medium">
              Nombre: La verdadera sombra
            </Text>
            <Text className="text-xs font-medium">Apodo: "La Pochola Mayor"</Text>
            <Text className="text-xs font-medium">Edad: Misteriosa</Text>
            <Text className="text-xs font-medium">
              Estado Civil: Independiente, fiel solo a su ambición
            </Text>
            <Text className="text-xs font-medium">
              Nacionalidad: Desconocida, pero su influencia se siente en todos lados
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => setShowMore(!showMore)}>
          <Text className="text-center text-blue-500">Mostrar más</Text>
        </TouchableOpacity>

        {showMore && (
          <View className="pt-10 text-justify">
            <Text className="font-medium text-xl text-center border-b mb-3">
              La Maestra de las Sombras
            </Text>
            <Image
              className="w-40 h-40 flex self-center p-5 justify-center"
              source={imagenes.mayolay6}
            />
            <Text className="p-2">
              Criada en Spegazzini, Mayola emergió de las sombras con un carácter complejo. Aunque es conocida por su relación con su novia Noelia, en su corazón siempre supo que sus verdaderos deseos se dirigían hacia los varones, especialmente hacia el angel Lazaro. 
            </Text>
            <Image
              className="w-40 h-40 flex self-center p-5 justify-center"
              source={imagenes.mayolay2}
            />
            <Text className="p-2">
              Durante un tiempo, estuvo en pareja con un joven llamado Lean, quien trabaja en la ruta levantando la mano y levantando otras cosas. Su relación fue tan intensa como sus habilidades en el cibercrimen, pero al final, su ambición y su atracción por Lazaro la llevaron por un camino diferente.
            </Text>
            <Text className="p-2">
              Mayola, una excompañera de entrenamientos en el PUBG, emergió de las sombras para convertirse en la mayor amenaza de "La Pocholay" Rocio y Mati Aguero. Con unos dedos fríos y calculadores, decidió seguir su propio camino, desafiando la supremacía de la temida dupla.
            </Text>
            <Text className="p-2">
              Con una habilidad sin igual para desmantelar operaciones rivales, Mayola se aseguraba de que cada dedo fuera tan preciso que, para cuando sus enemigos se daban cuenta, ya estaban adentro de sus bolsillos. Su lema, "La guerra se gana antes de que te la metan", refleja su enfoque estratégico y mortal.
            </Text>
            <Text className="p-2">
              Aunque su historia está llena de victorias en las sombras, su rivalidad con Rocio y Mati Aguero es la más feroz. Utilizando su astucia y sus dedos precisos, Mayola logró hacer que una de las operaciones más importantes de la pareja fracasara, demostrando que su amenaza no debía ser subestimada.
            </Text>
            <Text className="p-2">
              La guerra entre ellos apenas comienza, y en el oscuro mundo del cibercrimen, la astucia de Mayola asegura que ni Rocio ni Mati podrán descansar. Cada movimiento podría ser el último... o el más doloroso, gracias a las técnicas precisas y letales de Mayola.
            </Text>
            <Text className="p-2">
              En un mundo donde la traición está a la orden del día, Mayola se convierte en la reina de las sombras, y su próximo movimiento podría cambiarlo todo.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MayolaScreen;
