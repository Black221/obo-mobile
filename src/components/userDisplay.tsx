import { ICON_SIZE } from "@/constants/dimentions"
import { MAIN_COLORS } from "@/constants/styles"
import { Ionicons } from "@expo/vector-icons"
import { Image, Text, View, XStack, YStack } from "tamagui"
import { TextDescription } from "./textDisplay"



export const SmallUserDisplay = ({
    avatar,
    userName,
    time,
    details
} : {
    avatar:string,
    userName:string,
    time:string,
    details: boolean
}) => {

    return (
        <XStack padding={"$2"} space={"$2"} alignItems="center">
            <View>
                <Image source={{
                    uri: avatar
                }} style={{
                    width: 45,
                    height: 45,
                    borderRadius: 500
                }} />
            </View>
            <YStack flex={1}>
                <Text fontSize={
                    16
                } fontWeight={
                    "700"
                }>{userName}</Text>
                <Text fontSize={
                    12
                } color={
                    MAIN_COLORS.secondary
                }>{time}</Text>
            </YStack>
            {details && <View onPress={() => {}}>
                <Ionicons name="ellipsis-vertical" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
            </View>}
        </XStack>
    )
}


export const LargeUserDisplay = () => {

    return (
        <View>

        </View>
    )
}


export const UserComment = ({
    avatar,
    userName,
    time,
    comment
} : {
    avatar:string,
    userName:string,
    time:string,
    comment:string
}) => {

    return (
        <View>
            <SmallUserDisplay avatar={avatar} userName={userName} time={time} details={false} />
            <TextDescription text={comment} styles={
                {
                    container: { padding: 1 },
                    text: {
                        fontSize: 14,
                        paddingHorizontal: 10
                    },
                    more: {
                        inactive: { color: "blue" },
                        active: { color: "black" }
                    }
                }
            } />
        </View>
    )
}
