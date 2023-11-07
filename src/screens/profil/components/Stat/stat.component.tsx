import {Text, View, Image, XStack, YStack, ScrollView} from 'tamagui';
import {FontAwesome5} from "@expo/vector-icons";
import {useEffect, useState} from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    statContainer: {
        justifyContent:"center",
        alignItems:"center"
    },

    icon: {

    }
});
interface StatProps {
    likes:number,
    views:number,
    followers:number,
}
export const StatComponent = ({likes, views, followers}:StatProps = {
    likes: 5000,
    followers: 5000,
    views: 5000
}) => {

    const [ stat, setState ] = useState<StatProps>({
        likes, followers, views
    });

    useEffect(() => {
        setState( stat => ( { likes, views, followers }) )
    }, [likes, followers, views]);

    const getRenderStatValue = (value:number): string => {
        if ( value < 1000 )
            return value.toString()
        if (value > 999 && value < 1000000 )
            return (value/1000).toString() + "K"
        if (value > 999999)
            return (value/(1000*1000)).toString() + "M"

        return "";
    }

    return (
        <XStack justifyContent={"space-evenly"} alignItems={"center"}  >
            <YStack justifyContent={"center"} alignItems={"center"}>
                <FontAwesome5 name="heart" size={24} color="#f01625" />
                <Text fontSize={18} color={"black"} fontWeight={"bold"} > {getRenderStatValue(stat.likes)} </Text>
                <Text fontSize={16} color={"gray"}> Likes </Text>
            </YStack>
            <YStack w={2} h={40} bg={"#D9D9D9"}/>
            <YStack justifyContent={"center"} alignItems={"center"}>
                <FontAwesome5 name="eye" size={24} color="#0f53e3" />
                <Text fontSize={18} color={"black"}  fontWeight={"bold"} > {getRenderStatValue(stat.views)} </Text>
                <Text fontSize={16} color={"gray"}> Views </Text>

            </YStack>
            <YStack w={2} h={40} bg={"#D9D9D9"}/>
            <YStack justifyContent={"center"} alignItems={"center"}>
                <FontAwesome5 name="users" size={24} color="black" />
                <Text fontSize={18} fontWeight={"bold"} > {getRenderStatValue(stat.followers)} </Text>
                <Text fontSize={16} color={"gray"}> Followers </Text>
            </YStack>
        </XStack>

    )
}
