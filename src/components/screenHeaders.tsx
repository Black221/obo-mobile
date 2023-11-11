import { Ionicons } from "@expo/vector-icons"
import { View, XStack, Image } from "tamagui"
import NotificationBtn from "./notificationBtn"
import { APP_COLORS } from "@/constants/styles"


export const HomeHeader = () => {

    return (
        <XStack p={"$2"} alignItems="center">
            <View flex={1}>
                <Image w={60} height={60} source={require("@assets/logo/logo.png")} />
            </View>
            <XStack space={"$2"}>
                <View justifyContent="center" alignItems="center" bg={APP_COLORS.iconBg} width={38} height={38} borderRadius={40} position="relative">
                    <Ionicons name="chatbubbles-outline" size={24} color={APP_COLORS.iconMainColor} />
                </View>
                <NotificationBtn count={0} />
            </XStack>
        </XStack>
    )
}