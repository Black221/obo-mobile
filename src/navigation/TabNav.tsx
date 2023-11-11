import HomeScreen from '@screens/home';
import { FontAwesome5, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Image } from 'tamagui';
import {ProfilScreen} from "@/screens/profil";
import SearchScreen from '@/screens/search';

const Tab = createBottomTabNavigator();

export default function TabNav () {


    function SettingsScreen () {
        return (
            <View>
                <Text>Settings</Text>
            </View>
        )
    }

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name="home" size={24} color={focused ? "black" : "gray"} />
                )
            }} />
            <Tab.Screen name="Search" component={SearchScreen} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name="search" size={24} color={focused ? "black" : "gray"} />
                )
            }} />
            <Tab.Screen name="Add" component={SettingsScreen} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <Feather name="plus-square" size={28} color={focused ? "black" : "gray"} />
                )
            }} />
            <Tab.Screen name="Reels" component={SettingsScreen} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <FontAwesome5 name="video" size={24} color={focused ? "black" : "gray"} />
                )
            }} />
            <Tab.Screen name="Profile" component={ProfilScreen} options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                    <Image w={32} h={32} borderRadius={32} source={{
                        uri: "http://placekitten.com/200/300"
                    }} />
                )
            }} />
        </Tab.Navigator>
    )
}