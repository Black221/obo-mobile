import { View, XStack, Input } from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { ICON_SIZE } from "@constants/dimentions";
import { MAIN_COLORS } from "@constants/styles";

export const SearchInput = ({
    value,
    onChange,
    onSubmit,
}: {
    value: string;
    onChange: Function;
    onSubmit: Function;
    
}) => {



    return (
        <XStack alignItems='center' space={'$2'} p={'$2'}>
            <XStack bg={'$gray2'} alignItems='center'  flex={1} borderWidth={1} borderColor={'$gray8'} borderRadius={16} padding={'$1'} paddingHorizontal={'$3'}>
                <Ionicons name="search" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                <Input placeholder="Rechercher..." flex={1} borderWidth={0} m={0} paddingHorizontal={'$2'} />
                <View>
                    <Ionicons name="mic" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                </View>
            </XStack>
            <View>
                <Ionicons name="send" size={ICON_SIZE} color={MAIN_COLORS.primary} />
            </View>
        </XStack>
    );
}