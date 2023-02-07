import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StatusBar, Text, View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#202024' }}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Text>Hello World</Text> : <View /> }
    </View>
  );
}

