import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Image } from "expo-image";
import imagenes from "../../imagenes";

const Abi = () => {
  return (
    <ScrollView>
      <View className="p-5">
        <Text className="text-xl font-bold border-b mb-4">
          "La Pocholay" Rocio
        </Text>
        <View className="flex flex-row py-5 items-center justify-center">
          <Image
            className="w-40 h-40 rounded-lg border p-3"
            source={imagenes.pocholay1}
          />
          <View className="flex flex-col text-justify p-5 border-b border-t ml-3 items-center justify-center">
            <Text className="text-xs font-medium">
              Nombre: De dia Rocio y de noche "otra"
            </Text>
            <Text className="text-xs font-medium">Apodo: "La culisuelta"</Text>
            <Text className="text-xs font-medium">Edad: mi bebe</Text>
            <Text className="text-xs font-medium">
              Estado Civil: gobernada como Luz domina a la oscuridad(mati)
            </Text>
            <Text className="text-xs font-medium">
              Nacionalidad: caba con olor a kaka
            </Text>
          </View>
        </View>
        <View className="pt-10 text-justify">
          <Text className="font-medium text-xl text-center border-b mb-3">
            "Gutierrez Cao" La ladrona del siglo
          </Text>
          <Image
            className="w-40 h-40 flex self-center p-5 justify-center"
            source={imagenes.caquita}
          />
          <Text className="p-2">
            Arranco su vida criminal robando pequeñas cosas, entre ellas tu primera vez... hablando con desconocidos.
          </Text>
          <Image
            className="w-40 h-40 flex self-center p-5 justify-center"
            source={imagenes.baño}
          />
          <Text className="p-2">
            A medida que pasaban los años, Gutierrez Cao perfeccionó su arte. Comenzó a organizar pequeños grupos para realizar sus fechorías, convirtiéndose en la líder indiscutible de su masturbanda. La leyenda de la "Ladrona del Siglo" creció, y pronto su nombre era conocido en todos los rincones de la ciudad.
          </Text>
          <Text className="p-2">
            Su habilidad para escapar de situaciones imposibles era casi mágica, siempre un paso adelante de las autoridades. Sin embargo, su vida de crímenes no estaba exenta de riesgos. Una noche, mientras intentaba robar una joya invaluable, fue sorprendida por una sombra en la oscuridad...
          </Text>
          <Text className="p-2">
            ...Y esa sombra era nada menos que "El pochola" más conocido como Mati Aguero, "La Pocholay" Rocio, quien había estado vigilándola desde hace meses. Los dos se miraron fijamente, sabiendo que solo una podría salir victoriosa de esa noche.
          </Text>

          <Image
            className="w-40 h-40 flex self-center p-5 justify-center"
            source={imagenes.pocholay4}
          />
          <Text className="p-2">
            Múltiples fuentes han confirmado la impresionante destreza de Mati Aguero y Rocio en el manejo de armas, adquirida a través de un foro de internet llamado xxxtentacion que trata de: Prácticas Utilitarias Guerrilleras. Este sistema, de altísima capacidad intelectual, fue desarrollado como parte de un ambicioso proyecto escolar en Spegazzini, durante su cuarto año. Lo que comenzó como un simple experimento académico rápidamente se transformó en un sofisticado entrenamiento para el dominio de técnicas avanzadas en el cibercrimen.
          </Text>
          <Text className="p-2">
            Mientras Rocio sobresalía en la precisión y estrategia, Mati Aguero se convirtió en un maestro de la táctica y la improvisación. Juntos, se convirtieron en una dupla temida, con habilidades que superaban con creces las expectativas de cualquier instructor. Al final, lo que más asombraba a todos no era solo su habilidad técnica, sino cómo lograron transformar un simple proyecto escolar en la base de un legado criminal que dejó huella en la historia.
          </Text>
          <Text className="p-2">
            Sin embargo, en el oscuro mundo del crimen, no todo es fácil, y Mati Aguero y Rocio pronto encontraron a su mayor rival: "La Pochola Mayor", conocida entre los suyos como "Mayola". Esta figura enigmática surgió de las sombras, una excompañera de entrenamientos en el PUG que, en lugar de unirse a ellos, decidió seguir su propio camino, desafiando la supremacía de la temida dupla.
          </Text>
          <Text className="p-2">
            Mayola era conocida por su habilidad para meter cosas a los demás, utilizando su astucia para desmantelar operaciones rivales sin disparar ni una sola gota. Su lema, "La guerra se gana antes de que te la metan", era un reflejo de su enfoque calculador y estratégico. No había golpe que diera sin haberlo planificado al detalle, y sus dedos eran tan precisos que, para cuando te dabas cuenta de que estabas en su mira, ya era demasiado tarde...Ya estaban adentro. Nota: Lazaro el ángel negro, lo sabe por experiencia...
          </Text>
          <Text className="p-2">
            El choque entre estos titanes y espadas (mm) era inevitable. Mientras Mati y Rocio dominaban el campo de batalla con su audacia y habilidades, Mayola operaba desde las sombras, sembrando la desconfianza y la división. En una de sus más célebres artimañas, Mayola logró hacer que una operación crucial de Mati y Rocio fracasara, todo mientras ella metía dedos, con una sonrisa de satisfacción. Pero la guerra entre estos tres no había hecho más que empezar, y el mundo del cibercrimen estaba a punto de presenciar enfrentamientos épicos, donde la astucia, la lealtad, y la fuerza se pondrían a prueba.
          </Text>
          <Text className="p-2">
            Al final, una cosa era segura: con "La Pochola Mayor" en escena, ni Mati Aguero ni Rocio podrían bajar la pochola, porque el próximo movimiento podría ser el último... o el más grande golpe de todos...O doloroso por los dedos de mayola, uno nunca sabe.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Abi;
