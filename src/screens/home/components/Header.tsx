
import { View, Text, XStack } from 'tamagui'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export  function Header () {

    return (
        <XStack p={"$4"} alignItems='center'>
            <View flex={1} >
                <Text fontSize={"$8"} fontStyle='italic'>Instagram</Text>
            </View>
            <XStack alignItems='center' space={"$5"}>
                <AntDesign name="hearto" size={28} color="black" />
                <MaterialCommunityIcons name="facebook-messenger" size={28} color="black" />
            </XStack>
        </XStack>
    )
}

export function Bottom () {

    return (
        <View>
            <Text>Hello world</Text>
        </View>
    )
}