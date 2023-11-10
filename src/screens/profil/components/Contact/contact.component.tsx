import {Text, View, Image, XStack, YStack, ScrollView} from 'tamagui';
import {FontAwesome5} from "@expo/vector-icons";

interface ContactProps {

}
export const ContactComponent = ({}:ContactProps = {

}) => {

    return (
        <XStack p={20}>
            <XStack flex={1} justifyContent={"space-between"} alignItems={"center"}>
                <View bg={"#04cd5d"} w={70} h={40} justifyContent={"center"} alignItems={"center"} borderRadius={8}>
                    <FontAwesome5 name="map" size={24} color="white" />
                </View>
                <View bg={"#ffba03"} w={70} h={40} justifyContent={"center"} alignItems={"center"} borderRadius={8}>
                    <FontAwesome5 name="bookmark" size={24} color="white" />
                </View>
                <View bg={"#2654f0"} w={70} h={40} justifyContent={"center"} alignItems={"center"} borderRadius={8}>
                    <FontAwesome5 name="comment-alt" size={24} color="white" />
                </View>
                <View bg={"#fd680e"} w={70} h={40} justifyContent={"center"} alignItems={"center"} borderRadius={8}>
                    <FontAwesome5 name="phone-alt" size={24} color="white" />
                </View>
            </XStack>
        </XStack>
    )
}
