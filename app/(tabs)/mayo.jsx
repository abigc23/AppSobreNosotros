import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import img from "../../imagenes"
import { Image } from 'expo-image';
const Mayo = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={img.mayo} // Reemplaza con tu URL de imagen
        style={styles.image}
      />
      <Text style={styles.paragraph}>
        Este es el primer párrafo de información. Aquí puedes escribir lo que necesites sobre el tema que estás presentando.
      </Text>
      <Text style={styles.paragraph}>
        Este es el segundo párrafo de información. Puedes agregar más detalles aquí, incluyendo información adicional o relevante.
      </Text>
      <Text style={styles.paragraph}>
        Este es el tercer párrafo de información. Utiliza este espacio para concluir o añadir puntos finales que consideres importantes.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
    color: '#333',
  },
});

export default Mayo;
