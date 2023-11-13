import {View, XStack} from 'tamagui';
import {FontAwesome5, Ionicons} from "@expo/vector-icons";
import { MAIN_COLORS } from '@/constants/styles';
import { ICON_SIZE } from '@/constants/dimentions';

interface ContactProps {

}
export const ContactComponent = ({}:ContactProps = {

}) => {

    return (
        <XStack p={'$4'}>
            <XStack flex={1} justifyContent={"space-around"} alignItems={"center"}>
                <View bg={"white"} borderWidth={1} borderColor={"$gray6"} w={70} h={40} justifyContent={"center"} alignItems={"center"} borderRadius={8}>
                    <Ionicons name="map-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                </View>
                <View bg={"white"} borderWidth={1} borderColor={"$gray6"} w={70} h={40} justifyContent={"center"} alignItems={"center"} borderRadius={8}>
                    <Ionicons name="bookmark-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                </View>
                <View bg={"white"} borderWidth={1} borderColor={"$gray6"} w={70} h={40} justifyContent={"center"} alignItems={"center"} borderRadius={8}>
                    <Ionicons name="chatbubbles-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                </View>
                <View bg={"white"} borderWidth={1} borderColor={"$gray6"} w={70} h={40} justifyContent={"center"} alignItems={"center"} borderRadius={8}>
                    <Ionicons name="call-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                </View>
            </XStack>
        </XStack>
    )
}
