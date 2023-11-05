import { View, XStack, Text } from "tamagui"
import Ionicons from '@expo/vector-icons/Ionicons';


const Header = () => {
    return (
        <XStack alignItems="center" >
            <XStack flex={1} space={"$2"} alignItems="center">
                <Text h={40} w={40} bg={"greenyellow"} ></Text>
                <Text>Home</Text>
            </XStack>
            <XStack space={10}>
                {/* icon chat and setting fropm expo/icon*/}
                <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
                <Ionicons name="settings-outline" size={24} color="black" />
            </XStack>
        </XStack>
    )
}

export default Header;