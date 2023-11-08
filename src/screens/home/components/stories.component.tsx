import React from 'react';
import { StyleSheet } from 'react-native';
import {ScrollView, YStack, View, Text, XStack, Image} from "tamagui";

/* CAS CONTEXT */
export type ReactChildren = React.ReactNode
    | React.ReactElement

type StoryProps = {
    children?: string,
    storyPreview?: string,
    profilImage: string,
    userName: string,
}

type StoriesProps = {
    children?: ReactChildren
}

const styles = StyleSheet.create({
    storyPreview: {
        position: "absolute",
        height: 180,
        width: 140,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 20,
    },

    profilImage: {
        position: "absolute",
        height: "100%",
        width: "100%",
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 500,
    }
});
export const Story: React.FC<StoryProps> = ({   userName, storyPreview, profilImage }) => {
    return (
        <YStack position={"relative"} justifyContent={"flex-end"} alignItems={"flex-start"} p={15} width={140} height={180} bg={"#D9D9D9"} borderRadius={20}>
            <Image source={{uri: storyPreview}} style={styles.storyPreview} />
            <XStack justifyContent={"center"} alignItems={"center"} space={5}  >
                <View bg={"#6B4EFF"} width={25} height={25} borderRadius={25} >
                    <Image  source={{uri: profilImage}} style={styles.profilImage} />
                </View>
                <Text> {userName} </Text>
            </XStack>
        </YStack>
    )
}
export const Stories: React.FC<StoriesProps> = ({children}) => {
    return(
        <ScrollView horizontal={true} space={12} m={10}>
            {children}
        </ScrollView>
    );
}

export default Stories;