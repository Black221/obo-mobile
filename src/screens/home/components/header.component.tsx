import { View, XStack, Text } from "tamagui"
import Ionicons from '@expo/vector-icons/Ionicons';


const Header = () => {
    return (
        <XStack p={10} alignItems="center" >
            <XStack flex={1} space={"$2"} alignItems="center">
                {/*<Text h={40} w={40} bg={"greenyellow"} ></Text>*/}
                <Text  fontSize={16} fontWeight={"bold"} >Home</Text>
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