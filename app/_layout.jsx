import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const StackLayout = () => {
  return (
    <Stack screenOptions={{title: "Equipo Linux"}}>
      <Stack.Screen
        name="index" 
        options={{
          headerShown: false, // Ocultar el header en la pantalla de inicio
        }}
      />
      <Stack.Screen
        name="(tabs)/Inicio"
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: '#e9e9e9' }, // Color de fondo del header
          headerTitle: 'Equipo Linux', // Título del header
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 0, marginRight: 10,}}>
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'left', 
          headerTitleStyle: { marginLeft: -10 },
        })}
      />
    </Stack>
  );
};

export default StackLayout;
