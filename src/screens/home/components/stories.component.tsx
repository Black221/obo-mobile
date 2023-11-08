import React, {useEffect, useState} from 'react';
import { StyleSheet } from 'react-native';
import {ScrollView, YStack, View, Text, XStack, Image} from "tamagui";
import {ReactChildren} from "../../../../App";

const imageTest:string = "http://placekitten.com/200/300";


type StoryProps = {
    children?: string,
    storyPreview: string,
    profilImage: string,
    userName: string,
    id:number,
    active:boolean,
    resetActive(key:number):null|void

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
export const Story: React.FC<StoryProps> = ({   userName, storyPreview, profilImage, resetActive, id, active }) => {

    const [ actived, setActived ] = useState<boolean>(active);

    useEffect(() => {
        setActived(active)
    }, [active]);

    return (

        <YStack  position={"relative"} justifyContent={"flex-end"} alignItems={"flex-start"} p={15} m={10} width={140} height={180} bg={"#D9D9D9"} borderRadius={20} >
            <Image source={{uri: storyPreview}} style={styles.storyPreview} onPress={() => resetActive(id)}  />
            <XStack justifyContent={"center"} alignItems={"center"} space={5}  >
                <View bg={"#6B4EFF"} width={25} height={25} borderRadius={25} >
                    <Image  source={{uri: profilImage}} style={styles.profilImage} />
                </View>
                <Text> {userName} </Text>
            </XStack>
            {actived && <Text>Active</Text>}
        </YStack>
    )
}

const stories: any[] = [
    {userName:"Lord", profilImage: imageTest, storyPreview: imageTest},
    {userName:"Lord", profilImage: imageTest, storyPreview: imageTest},
    {userName:"Lord", profilImage: imageTest, storyPreview: imageTest},
];
export const Stories: React.FC<StoriesProps> = ({children}) => {
    const [active, setActive] = useState<boolean[]>(stories.map(s=>false))
    const resetActive = (key:number) => {
        setActive( active => active.map((a, id) => id === key ) )
    }
    return(
        <ScrollView horizontal={true} space={0}  showsHorizontalScrollIndicator={false}>
            {stories.map( (story, id) => <Story key={id} id={id} active={active[id]} storyPreview={story.storyPreview} profilImage={story.profilImage} userName={story.userName} resetActive={resetActive} /> )}
        </ScrollView>
    );
}

export default Stories;