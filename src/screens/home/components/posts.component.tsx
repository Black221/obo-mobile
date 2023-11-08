import { FontAwesome5 } from "@expo/vector-icons";
import {View, XStack, Image, Text, YStack, ScrollView} from "tamagui";
import {useState, useEffect, ReactNode} from "react";
import useAxiosFunction from "@/hooks/useAxios";
import { imgInstance } from "@/api/imgApi";
import { ReactChildren } from "App";
import {StyleSheet, Dimensions} from "react-native";

type ImageBoxProps = {
    children?: ReactChildren,
    posts:string[]
}
type ImageChildProps = {
    src:string
}
type PostProps = {
    userName: string,
    avatar: string,
    posts: string[],
    time: string,
    location: string
}
type PostHeaderProps = {
    avatar:string,
    userName:string,
    time:string,
    location:string,
}

const styles = StyleSheet.create({
    post: {
        position: "absolute",
        height: 450,
        width: 200,
        flex: 1,
        resizeMode: 'cover',
    },
});

export default function Posts () {
    const  [response, error, loading, fetch] = useAxiosFunction();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch({
            axiosInstance: imgInstance,
            url: "api/users?page=2",
            method: "GET",
            requestConfig: []
        })
    }, [])
    
    useEffect(() => {
        if (response) {
            console.log(response.data);
            setUsers(response.data);
        }
    }, [response])

    return (
        <View>
            {loading ? <View><Text>Loading...</Text></View> 
            : <View>
                {users.map((user: any, id) => (
                    <Post key={id} userName={user.first_name} avatar={user.avatar} posts={[user.avatar, user.avatar ]} time={"2 hours ago"} location={"New York"} />
                ))}
            </View>}
        </View>
    )
}
export const Post: React.FC<PostProps> = ({userName, avatar, posts, time, location}) => {
    return (
        <View position="relative" borderColor={"gray"} borderWidth={2} borderRadius={20} m={10} >
            <PostHeader avatar={avatar} location={location} time={time} userName={userName}/>
            <ImageBox posts={posts}/>


            <XStack p={20} pt={16}>
                <XStack space={16} flex={1}>
                    <FontAwesome5 name="heart" size={28} color="black" />
                    <FontAwesome5 name="comment" size={28} color="black" />
                    <FontAwesome5 name="paper-plane" size={28} color="black" />
                </XStack>
                <View>
                    <FontAwesome5 name="bookmark" size={28} color="black" />
                </View>
            </XStack>
            <View p={20} pt={0} space={10}>
                <Text>8 j'aimes</Text>
                <XStack flex={1} space={10} alignItems="center">
                    <Image w={32} h={32} borderRadius={32} source={{
                        uri: avatar ? avatar : "http://placekitten.com/200/300"
                    }} />
                    <Text>Ajouter un commentaire</Text>
                </XStack>
                <Text>il y'a 3 jours</Text>
            </View>
        </View>
    )
}
const PostHeader: React.FC<PostHeaderProps> = ({avatar, userName, time, location}) => {
    return (
        <XStack p={20} alignItems="center">
            <XStack flex={1} space={10} alignItems="center">
                <Image w={32} h={32} borderRadius={32} source={{
                    uri: avatar ? avatar : "http://placekitten.com/200/300"
                }} />
                <YStack>
                    <Text fontWeight={"bold"} >{userName}</Text>
                    <Text color={"gray"} >{time} - {location} </Text>
                </YStack>
            </XStack>
            <View transform={"rotate(90deg)"} >
                <FontAwesome5 name="ellipsis-v" size={18} color="black" />
            </View>
        </XStack>
    );
}
const ImageBox: React.FC<ImageBoxProps> = ({posts}) => {
    const Rounded: React.FC = () => {
        return (
            <View width={10} height={10} borderRadius={10} bg={"#D9D9D9"} />
        )
    }

    return (
        <View>
            <ScrollView position={"relative"} horizontal={true} h={450} >
                <XStack>
                    {posts.map((post, id) =>
                        <ImageChild key={id} src={post} />
                    )}
                </XStack>
            </ScrollView>
            <XStack space={5} position={"absolute"} top={"90%"} left={"50%"} transform={"translateX(0)"} >
                {posts.map(() => <Rounded/>)}
            </XStack>
        </View>
    );
}
const ImageChild: React.FC<ImageChildProps> = ({ src }) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <View h={400} w={windowWidth-20} bg={"black"}  position={"relative"}>
            <Image position={"absolute"} top={0} w={"100%"} h={450} resizeMode={"cover"} flex={1} source={{
                uri:src
            }} />
        </View>
    );
}