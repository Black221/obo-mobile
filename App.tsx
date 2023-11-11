import { TamaguiProvider, Theme, View, Text, Button, Stack } from 'tamagui'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import config from './tamagui.config'
import StackNav from '@/navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from '@/screens/loading';
import { useEffect, useState } from 'react';
import { AppProvider } from '@/contexts/appContext';




export default function App() {

  const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	})

  //wait 10s before rendering
  const [render, setRender] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setRender(true)
      clearTimeout(id)
    }, 10000)
  }, [])

	if (!loaded || !render) {
		return <LoadingScreen />
	}

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <AppProvider>

          {/* rendu */}
          <NavigationContainer>
            <StackNav />
          </NavigationContainer>

        </AppProvider>
			</Theme>
			<StatusBar style="light" backgroundColor='black' animated={true}  hidden={false} translucent={false} />
    </TamaguiProvider>
  );
}