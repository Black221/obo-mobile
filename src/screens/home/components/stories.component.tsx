import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {YStack, View, Text, XStack, Image} from "tamagui";


import { imgInstance } from '@/api/imgApi';
import { InfinityScrolling } from '@/components/infinityScrolling';

type StoryProps = {
    children?: string,
    storyPreview: string,
    profilImage: string,
    userName: string,
    id:number,
    active:boolean,
    resetActive(key:number):null|void,
    avatar:string,
    first_name:string,
    last_name:string,
}

type StoriesProps = {
    children?: JSX.Element | JSX.Element[],
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
export const Story = (
    {first_name, avatar, userName, id, active, resetActive}:StoryProps
) => {

    const [ actived, setActived ] = useState<boolean>(active);

    useEffect(() => {
        setActived(active)
    }, [active]);

    return (

        <YStack  
            position={"relative"} 
            justifyContent={"flex-end"} 
            alignItems={"flex-start"} 
            m={'$2'}  width={140}
            height={180} 
            bg={"#D9D9D9"} borderRadius={20} 
        >
            <Image 
                source={{uri: avatar}} 
                style={styles.storyPreview} 
                onPress={() => resetActive(id)}  
            />
            <XStack 
                alignItems={"center"} 
                space={'$1'} padding={'$2'} borderRadius={20}
                backgroundColor={"rgba(107,78,255,0.2)"}
                w={"100%"}
            >
                <View 
                    bg={"#6B4EFF"} 
                    width={25} height={25} 
                    borderRadius={25} 
                >
                    <Image  source={{uri: avatar}} style={styles.profilImage} />
                </View>
                <Text col={'white'} fontWeight={"900"} fontSize={14} letterSpacing={1.5}> {first_name} </Text>
            </XStack>
        </YStack>
    )
}


export const Stories: React.FC<StoriesProps> = ({children}) => {


    return(
        <InfinityScrolling 
            style={{
                space: 20
            }}
            renderItem={
                ({item}: any) => <Story {...item} />
            } 
            apiInstance={imgInstance} 
            uri={"api/users"} 
            context={{
                method: "GET", 
                current: 1, 
                paramsName: "page", 
                data: [],
                next: (prev: number): number => { return prev + 1}
            }} 
        />
    );
}

export default Stories;