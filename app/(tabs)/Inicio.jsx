import { Link } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import imagenes from '../../imagenes'; // Asegúrate de que la ruta sea correcta

const Index = () => {
  return (
    <View style={styles.indexcontainer}>
      <TouchableOpacity style={styles.card}>
        <Link href="mayo" style={styles.link}>
          <View style={styles.cardContent}>
            <Image source={imagenes.mayo} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Julián Mayola</Text>
              <Text style={styles.detailText}>Signo: Sagitario</Text>
              <Text style={styles.detailText}>Altura: 1.20m</Text>
              <Text style={styles.detailText}>Color favorito: azul Arch</Text>
            </View>
          </View>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Link href="abi" style={styles.link}>
          <View style={styles.cardContent}>
            <Image source={imagenes.mayo} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Rocío Gutierrez</Text>
              <Text style={styles.detailText}>Signo: Sagitario</Text>
              <Text style={styles.detailText}>Altura: 1.74m</Text>
              <Text style={styles.detailText}>Color favorito: negro</Text>
            </View>
          </View>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Link href="aguero" style={styles.link}>
          <View style={styles.cardContent}>
            <Image source={imagenes.mayo} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>Damian Aguero</Text>
              <Text style={styles.detailText}>Signo: Piscis</Text>
              <Text style={styles.detailText}>Altura: 1.50m</Text>
              <Text style={styles.detailText}>Color favorito: verde</Text>
            </View>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  indexcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
  },
  card: {
    backgroundColor: '#E1E1E1', // Color de fondo similar al de la imagen
    padding: 20,
    margin: 10,
    borderRadius: 20,
    width: 420, // Ancho incrementado
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  link: {
    width: '100%',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
});

export default Index;
