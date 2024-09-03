import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import React from 'react';
import imagenes from '../imagenes'; 
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Equipo Linux</Text>
      <Image source={imagenes.arch} style={styles.image}/>
      <Text style={styles.title}>Bienvenido a nuestra app</Text>
      <Text style={styles.subtitle}>Conoce más sobre nosotros</Text>
      <View style={styles.buttonContainer}>
        <Link href="Inicio" className=" text-center px-3 py-4 bg-[#ffffff] rounded-[40px] w-[200px] m-5 h-[60px]" >
            <TouchableOpacity>
              <Text className="text-xl">Ingresar</Text>
            </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title1: {
    fontSize: 35,
    fontWeight: 'semibold',
    color: '#2f2f2f',
    marginBottom: 30,
    textAlign: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2f2f2f',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#2f2f2f',
    marginBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: '#2f2f2f',
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default Index;
