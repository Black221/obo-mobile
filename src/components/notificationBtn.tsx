import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "tamagui";
import { APP_COLORS } from "@/constants/styles";
import { useEffect, useState } from "react";

export default function NotificationBtn ({ count }: any) {

    const [render, setRender] = useState<string>("");

    useEffect(() => {
        if (count > 20) {
            setRender("+20");
        } else if (count !== 0) {
            setRender(count.toString());
        }
    }, [count]);


    return (
        <View justifyContent="center" alignItems="center" bg={APP_COLORS.iconBg} width={38} height={38} borderRadius={40} position="relative">
            {render !== "" && <View zIndex={1} justifyContent="center" alignItems="center" position="absolute" top={0} right={0} bg={"red"} width={20} height={20} borderRadius={20}>
                <Text textAlign="center" fontSize={10} fontWeight={"800"}>{render}</Text>
            </View>}
            <Ionicons name="notifications-outline" size={24} color={APP_COLORS.iconMainColor} />
        </View>
    )
}

