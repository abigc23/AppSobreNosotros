import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';
import imagenes from '../../imagenes';
import { WebView } from 'react-native-webview';

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
    src="https://open.spotify.com/embed/track/2kQDcD7adY2odZLLfIexFj?utm_source=generator&theme=0"
    width="100%"
    height="352"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  ></iframe>
</body>
</html>
`;

const Aguero = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.article}>
        <Text style={styles.headline}>Mati "El Pochola" Aguero</Text>
        <View style={styles.profileSection}>
          <Image source={imagenes.traficante} style={styles.profileImage} />
          <View style={styles.details}>
            <Text style={styles.detailText}>• Nombre: Mati Aguero</Text>
            <Text style={styles.detailText}>• Apodo: "El Pochola"</Text>
            <Text style={styles.detailText}>• Edad: 18 tiros</Text>
            <Text style={styles.detailText}>• Estado Civil: Buscado</Text>
            <Text style={styles.detailText}>• Nacionalidad: River Plate</Text>
          </View>
        </View>
        <Text style={styles.detailText}>• Canción favorita del maleante:</Text>
        <View style={styles.webview}>
          <WebView
            source={{ html: htmlContent }}
          />
        </View>
        <Text style={styles.headline2}>
          Mati, más conocido como "El Pochola", es un conocido traficante del barrio de la 13.
        </Text>
        <Image source={imagenes.caquita} style={styles.bodyImage} />
        <Text style={styles.bodyText}>
          Debe su apodo a su curiosa forma de llamar a su mercancía, y además es un hacker muy peligroso.
        </Text>
        <Text style={styles.bodyText}>
          Lo conocen por sus repetidos intentos de hackear la laptop de un compañero, sin éxito.
        </Text>
        <Image source={imagenes.baño} style={styles.bodyImage} />
        <Text style={styles.bodyText}>
          Testigos atestiguan de forma flatulenta la falta de binarios en su domicilio sobre calle Arcos y Celosas.
        </Text>
        <Text style={styles.bodyText}>
          Las autoridades recomiendan mantenerse alejado de este individuo.
        </Text>
        <Text style={styles.bodyText}>
          Se lo ha visto en las inmediaciones de la ruta Av. Ezeiza - Cañuelas, levantando gente y trabas como Uber, esto es contado de primera mano por uno de los empleados de peaje que se negó a darnos su nombre pero sabemos su apellido: Lean.
        </Text>
        <Image source={imagenes.pelado} style={styles.bodyImage} />
        <Text style={styles.bodyText}>
          Varias fuentes cuentan de primera mano su alta experiencia en el manejo de armas debido a su entrenamiento intensivo en un campo de entrenamiento virtual conocido como PUBG.
        </Text>
        <Text style={styles.bodyText}>
          Está entrenado en las artes marciales de Pitón (Python), durante la primaria se lo ha visto emplear su técnica secreta de movimientos místicos que programan la mente de sus adversarios y los reducen en un console.log.
        </Text>
        <Image source={imagenes.piquito} style={styles.bodyImage} />
        <Text style={styles.bodyText}>
          Su banda, los Llamas De Mergencia, utilizan el siguiente gesto como muestra de poder y dominancia frente a sus adversarios.
        </Text>
        <Text style={styles.bodyText}>Algunas de sus frases son:</Text>
        <View style={styles.phrasesList}>
          <Text style={styles.phrase}>• "bien ahí padre"</Text>
          <Text style={styles.phrase}>• "bersachi brrr"</Text>
          <Text style={styles.phrase}>• "quiero ser Pitón Div Eluper"</Text>
          <Text style={styles.phrase}>• "leal hasta la muelte"</Text>
          <Text style={styles.phrase}>• "voy a pasarme a arcos"</Text>
          <Text style={styles.phrase}>• "te amo mati"</Text>
          <Text style={styles.phrase}>• "quiero un polo, 20 palos me sale"</Text>
          <Text style={styles.phrase}>• "voy a vender las vacas"</Text>
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
  bodyText: {
    fontSize: 16,
    color: '#2f2f2f',
    marginBottom: 10,
    textAlign: 'justify',
  },
  bodyImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  phrasesList: {
    marginTop: 10,
  },
  phrase: {
    fontSize: 14,
    color: '#2f2f2f',
    marginBottom: 5,
  },
});

export default Aguero;
