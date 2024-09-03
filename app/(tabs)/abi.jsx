import { View, Text, ScrollView, Image, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import imagenes from '../../imagenes';
import { WebView } from 'react-native-webview';
import { Audio } from 'expo-av';

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Spotify Embed</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      background-color: inherit;
    }
    #spotify-embed {
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: 20px;
    }
  </style>
</head>
<body>
  <iframe
    id="spotify-embed"
    src="https://open.spotify.com/embed/track/7F7kL3i6SDEIbDcoJZGiig?utm_source=generator&theme=0"
    width="100%"
    height="352"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</body>
</html>
`;


const Abi = () => {



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.article}>
        <Text style={styles.headline}>"La Pocholay" Rocio</Text>
        <View style={styles.profileSection}>
          <Image source={imagenes.pocholay1} style={styles.profileImage} />
          <View style={styles.details}>
            <Text style={styles.detailText}>• Nombre: De día Rocio y de noche "otra"</Text>
            <Text style={styles.detailText}>• Apodo: "La culisuelta"</Text>
            <Text style={styles.detailText}>• Edad: mi bebé</Text>
            <Text style={styles.detailText}>• Estado Civil: gobernada como Luz domina a la oscuridad (mati)</Text>
            <Text style={styles.detailText}>• Nacionalidad: CABA con olor a kaka</Text>
          </View>
        </View>
        <View style={styles.webview}>
          <WebView
            source={{ html: htmlContent }}
          />
        </View>
        <View style={styles.moreContent}>
          <Text style={styles.headline2}>"Gutierrez Cao" La ladrona del siglo</Text>
          <Image source={imagenes.pocholay3} style={styles.img1} />
          <Text style={styles.bodyText}>
            Arrancó su vida criminal robando pequeñas cosas, entre ellas tu primera vez... hablando con desconocidos.
          </Text>
          <Image source={imagenes.pocholay2} style={styles.img2} />
          <Text style={styles.bodyText}>
            A medida que pasaban los años, Gutierrez Cao perfeccionó su arte. Comenzó a organizar pequeños grupos para realizar sus fechorías, convirtiéndose en la líder indiscutible de su masturbanda.
          </Text>
          <Text style={styles.bodyText}>
            La leyenda de la "Ladrona del Siglo" creció, y pronto su nombre era conocido en todos los rincones de la ciudad.
          </Text>
          <Text style={styles.bodyText}>
            Su habilidad para escapar de situaciones imposibles era casi mágica, siempre un paso adelante de las autoridades. Sin embargo, su vida de crímenes no estaba exenta de riesgos. Una noche, mientras intentaba robar una joya invaluable, fue sorprendida por una sombra en la oscuridad...
          </Text>
          <Text style={styles.bodyText}>
            ...Y esa sombra era nada menos que "El pochola" más conocido como Mati Aguero, "La Pocholay" Rocio, quien había estado vigilándola desde hace meses. Los dos se miraron fijamente, sabiendo que solo una podría salir victoriosa de esa noche.
          </Text>
          <Image source={imagenes.pocholay4} style={styles.img3} />
          <Text style={styles.bodyText}>
            Múltiples fuentes han confirmado la impresionante destreza de Mati Aguero y Rocio en el manejo de armas, adquirida a través de un foro de internet llamado xxxtentacion que trata de: Prácticas Utilitarias Guerrilleras. Este sistema, de altísima capacidad intelectual, fue desarrollado como parte de un ambicioso proyecto escolar en Spegazzini, durante su cuarto año.
          </Text>
          <Text style={styles.bodyText}>
            Lo que comenzó como un simple experimento académico rápidamente se transformó en un sofisticado entrenamiento para el dominio de técnicas avanzadas en el cibercrimen.
          </Text>
          <Text style={styles.bodyText}>
            Mientras Rocio sobresalía en la precisión y estrategia, Mati Aguero se convirtió en un maestro de la táctica y la improvisación. Juntos, se convirtieron en una dupla temida, con habilidades que superaban con creces las expectativas de cualquier instructor.
          </Text>
          <Text style={styles.bodyText}>
            Al final, lo que más asombraba a todos no era solo su habilidad técnica, sino cómo lograron transformar un simple proyecto escolar en la base de un legado criminal que dejó huella en la historia.
          </Text>
          <Text style={styles.bodyText}>
            Sin embargo, en el oscuro mundo del crimen, no todo es fácil, y Mati Aguero y Rocio pronto encontraron a su mayor rival: "La Pochola Mayor", conocida entre los suyos como "Mayola". Esta figura enigmática surgió de las sombras, una excompañera de entrenamientos en el PUG que, en lugar de unirse a ellos, decidió seguir su propio camino, desafiando la supremacía de la temida dupla.
          </Text>
          <Text style={styles.bodyText}>
            Mayola era conocida por su habilidad para meter cosas a los demás, utilizando su astucia para desmantelar operaciones rivales sin disparar ni una sola gota.
          </Text>
          <Text style={styles.bodyText}>
            Su lema, "La guerra se gana antes de que te la metan", era un reflejo de su enfoque calculador y estratégico. No había golpe que diera sin haberlo planificado al detalle, y sus dedos eran tan precisos que, para cuando te dabas cuenta de que estabas en su mira, ya era demasiado tarde... Ya estaban adentro. Nota: Lázaro el ángel negro, lo sabe por experiencia...
          </Text>
          <Text style={styles.bodyText}>
            El choque entre estos titanes y espadas (mm) era inevitable. Mientras Mati y Rocio dominaban el campo de batalla con su audacia y habilidades, Mayola operaba desde las sombras, sembrando la desconfianza y la división.
          </Text>
          <Text style={styles.bodyText}>
            En una de sus más célebres artimañas, Mayola logró hacer que una operación crucial de Mati y Rocio fracasara, todo mientras ella metía dedos, con una sonrisa de satisfacción.
          </Text>
          <Text style={styles.bodyText}>
            Pero la guerra entre estos tres no había hecho más que empezar, y el mundo del cibercrimen estaba a punto de presenciar enfrentamientos épicos, donde la astucia, la lealtad, y la fuerza se pondrían a prueba.
          </Text>
          <Text style={styles.bodyText}>
            Al final, una cosa era segura: con "La Pochola Mayor" en escena, ni Mati Aguero ni Rocio podrían bajar la pochola, porque el próximo movimiento podría ser el último... o el más grande golpe de todos... O doloroso por los dedos de Mayola, uno nunca sabe.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e9e9e9',
    padding: 20,
  },
  article: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f2f2f',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#2f2f2f',
    paddingBottom: 10,
  },
  headline2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f2f2f',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#2f2f2f',
    paddingBottom: 10,
    textAlign: 'center',
  },
  webview: {
    width: '100%',
    height: 155,
    marginBottom: 30,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'inherit',
  },
  profileSection: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  detailText: {
    fontSize: 16,
    color: '#2f2f2f',
    marginBottom: 5,
  },
  moreContent: {
    marginTop: 20,
  },
  bodyText: {
    fontSize: 16,
    color: '#2f2f2f',
    marginBottom: 10,
    textAlign: 'justify',
  },
  img1: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginVertical: 10,
  },
  img2: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  img3: {
    width: '100%',
    height: 500,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default Abi;
