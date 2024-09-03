import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#e9e9e9' }, // Color de fondo del header
        headerTitle: '', // No mostrar título en el header
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 10 }}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
    </Stack>
  );
};

export default StackLayout;
