import { TamaguiProvider, Theme, View, Text, Button, Stack } from 'tamagui'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar';
import config from './tamagui.config'
import { randomNumber } from '@/utils/random';
import { useState } from 'react';
import StackNav from '@/navigation/StackNav';
import { NavigationContainer } from '@react-navigation/native';

/* CAS CONTEXT */
export type ReactChildren = React.ReactNode
    | React.ReactElement
    | React.ReactNode[]
    | React.ReactElement[]


export default function App() {

  const [rand, setRand] = useState(randomNumber(0, 100));
  const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	})

	if (!loaded) {
		return null
	}

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        {/* rendu */}
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
			</Theme>
			<StatusBar style="light" backgroundColor='black' animated={true}  hidden={false} translucent={false} />
    </TamaguiProvider>
  );
}