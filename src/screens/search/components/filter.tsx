
import { View, Text, XStack } from "tamagui"
import { useState } from "react";
import { APP_COLORS, MAIN_COLORS } from "@/constants/styles";
import { FlatList } from 'react-native';


const ItemToRenderer = ({ label, selected, onPress } : { label: string, selected: boolean, onPress: Function }) => (
    <Text 
        key={label}
        fontSize={16} 
        marginHorizontal={'$2'}
        paddingVertical={'$1.5'}
        letterSpacing={1}
        paddingHorizontal={'$4'}
        borderRadius={8}
        onPress={() => onPress()}
        style={{
            color: selected ? 'white' : 'black',
            backgroundColor: selected ? MAIN_COLORS.primary : "#FFFFFF",
            fontWeight: selected ? 'bold' : 'normal'
        }}
    >
        {label}
    </Text>
)


const Filter = ({ 
    label, filter, getFilter
} : {
    label: string,
    filter: string[],
    getFilter: Function
}) => {
    
    const [selected, setSelector] = useState<string>(filter[0])


    return (
        <View space={"$1"}>
            <Text color={MAIN_COLORS.secondary} marginLeft={"$2"} fontSize={16}>{label}</Text>
            <FlatList
                horizontal={true}
                data={filter}
                renderItem={({ item }) => <ItemToRenderer label={item} selected={selected === item} onPress={() => { setSelector(item); getFilter(item) }} />}
                keyExtractor={item => item}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 8 }}
            />
        </View>
    )
}
                
export default Filter;