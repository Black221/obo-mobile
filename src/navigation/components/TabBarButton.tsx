import { ICON_SIZE, ICON_SIZE_SMALL } from "@/constants/dimentions";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "tamagui/linear-gradient";
import { View } from "tamagui";



export default function TabBarButton() {
    return (
        <View w={"$6"} h={"$6"} position="absolute" bottom={"$2"} display='flex' justifyContent='center' alignItems='center'>
            <LinearGradient
                position="absolute"
                width="$6" height="$6"
                borderRadius="$12"
                colors={['#61E3FF', '#6764FF']}
                start={[1, 0]} end={[1, 1]}
            />
            <FontAwesome5 name="plus" size={ICON_SIZE_SMALL} color="white" />
        </View>
    );
  }