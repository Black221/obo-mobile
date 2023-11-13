import Home from '@/screens/home';
import { View, Text } from 'tamagui';
import { createStackNavigator } from '@react-navigation/stack';
import TabNav from './TabNav';
// import { CurveTabNav } from './CurveTabNav';

const Stack = createStackNavigator();

function Notifications () {
    return (
        <View>
            <Text>Notifications</Text>
        </View>
    )
}

function Profile () {
    return (
        <View>
            <Text>Profile</Text>
        </View>
    )
}

function Settings () {
    return (
        <View>
            <Text>Settings</Text>
        </View>
    )
}

export default function StackNav () {

    return (
        <Stack.Navigator>
            <Stack.Screen name="TabScreen" component={TabNav} options={{
                headerShown: false
            }} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}