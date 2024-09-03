import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index" 
        options={{
          headerShown: false, // Ocultar el header en la pantalla de inicio
        }}
      />
      <Stack.Screen
        name="Inicio"
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#e9e9e9' }, // Color de fondo del header
          headerTitle: 'Equipo Linux', // No mostrar título en el header
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 10 }}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'left', // Alinea el contenido del header a la izquierda
          headerTitleStyle: { marginLeft: -10 }, // Ajuste adicional para eliminar espacio
        })}
      />
      {/* Agrega más pantallas aquí si es necesario */}
    </Stack>
  );
};

export default StackLayout;
