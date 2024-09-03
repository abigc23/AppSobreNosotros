import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import imagenes from '../../imagenes';

const MayolaScreen = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.article}>
        <Text style={styles.headline}>"La Pochola Mayor" Mayola</Text>
        <View style={styles.profileSection}>
          <Image source={imagenes.mayola4} style={styles.profileImage} />
          <View style={styles.details}>
            <Text style={styles.detailText}>• Nombre: La verdadera sombra</Text>
            <Text style={styles.detailText}>• Apodo: "La Pochola Mayor"</Text>
            <Text style={styles.detailText}>• Edad: Misteriosa</Text>
            <Text style={styles.detailText}>• Estado Civil: Independiente, fiel solo a su ambición</Text>
            <Text style={styles.detailText}>• Nacionalidad: Desconocida, pero su influencia se siente en todos lados</Text>
          </View>
        </View>
          <View style={styles.moreContent}>
            <Text style={styles.headline2}>La Maestra de las Sombras</Text>
            <Image source={imagenes.mayola6} style={styles.bodyImage} />
            <Text style={styles.bodyText}>
              Criada en Spegazzini, Mayola emergió de las sombras con un carácter complejo. Aunque es conocida por su relación con su novia Noelia, en su corazón siempre supo que sus verdaderos deseos se dirigían hacia los varones, especialmente hacia el angel Lazaro.
            </Text>
            <Image source={imagenes.mayola2} style={styles.bodyImage} />
            <Text style={styles.bodyText}>
              Durante un tiempo, estuvo en pareja con un joven llamado Lean, quien trabaja en la ruta levantando la mano y levantando otras cosas. Su relación fue tan intensa como sus habilidades en el cibercrimen, pero al final, su ambición y su atracción por Lazaro la llevaron por un camino diferente.
            </Text>
            <Text style={styles.bodyText}>
              Mayola, una excompañera de entrenamientos en el PUBG, emergió de las sombras para convertirse en la mayor amenaza de "La Pocholay" Rocio y Mati Aguero. Con unos dedos fríos y calculadores, decidió seguir su propio camino, desafiando la supremacía de la temida dupla.
            </Text>
            <Text style={styles.bodyText}>
              Con una habilidad sin igual para desmantelar operaciones rivales, Mayola se aseguraba de que cada dedo fuera tan preciso que, para cuando sus enemigos se daban cuenta, ya estaban adentro de sus bolsillos. Su lema, "La guerra se gana antes de que te la metan", refleja su enfoque estratégico y mortal.
            </Text>
            <Text style={styles.bodyText}>
              Aunque su historia está llena de victorias en las sombras, su rivalidad con Rocio y Mati Aguero es la más feroz. Utilizando su astucia y sus dedos precisos, Mayola logró hacer que una de las operaciones más importantes de la pareja fracasara, demostrando que su amenaza no debía ser subestimada.
            </Text>
            <Text style={styles.bodyText}>
              La guerra entre ellos apenas comienza, y en el oscuro mundo del cibercrimen, la astucia de Mayola asegura que ni Rocio ni Mati podrán descansar. Cada movimiento podría ser el último... o el más doloroso, gracias a las técnicas precisas y letales de Mayola.
            </Text>
            <Text style={styles.bodyText}>
              En un mundo donde la traición está a la orden del día, Mayola se convierte en la reina de las sombras, y su próximo movimiento podría cambiarlo todo.
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
  showMoreText: {
    fontSize: 16,
    color: '#1e90ff',
    textAlign: 'center',
    marginVertical: 10,
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
  bodyImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default MayolaScreen;
