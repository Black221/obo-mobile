import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { View, ButtonIcon } from "tamagui";


export default function IconButton ({
        action = () => {},
        name 
    } : {
        action: () => void;
        name: "bars" | "bell" | "ellipsis-v" | "facebook-messenger" | "heart" | "paper-plane" | "search" | "user" | "home"
    }) {
    return (
        <TouchableOpacity onPress={action}>
            <FontAwesome5 name={name} size={24} color="black" />
        </TouchableOpacity>
    )
}