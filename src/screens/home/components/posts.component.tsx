import { FontAwesome5 } from "@expo/vector-icons";
import {View, XStack, Image, Text, YStack, ScrollView} from "tamagui";
import {useState, useEffect, ReactNode} from "react";
import useAxiosFunction from "@/hooks/useAxios";
import { imgInstance } from "@/api/imgApi";
import { ReactChildren } from "App";
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, FlatList} from "react-native";

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
                    <Post key={id} userName={user.first_name} avatar={user.avatar} posts={[user.avatar, user.avatar, user.avatar,user.avatar  ]} time={"2 hours ago"} location={"New York"} />
                ))}
            </View>}
        </View>
    )
}
export const Post: React.FC<PostProps> = ({userName, avatar, posts, time, location}) => {
    return (
        <View position="relative" borderColor={"#0000004D"} borderWidth={1} borderRadius={20} m={10} >
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
    const Rounded: React.FC<{active:boolean}> = ({active}) => {
        return (
            active? (<View width={30} height={5} borderRadius={10} bg={"#D9D9D9"} />)
                :
                (<View width={5} height={5} borderRadius={10} bg={"black"} />)
        )
    }

    const [active, setActive] = useState(1);
    const windowWidth = Dimensions.get('window').width;

    function onScrollEnd(e:any) {
        let pageNumber = Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / windowWidth + 0.5) + 1, 0), posts.length);
        setActive(pageNumber)
    }

    return (
        <View>
            <FlatList
                pagingEnabled={true}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={posts}
                onMomentumScrollEnd={(e) => onScrollEnd(e)}
                renderItem={ ({item, index}) => <ImageChild key={index} src={item} /> }
            />

            <XStack  width={"100%"} flex={1} justifyContent={"center"} alignItems={"flex-end"} space={5} position={"absolute"} bottom={10} >
                {posts.map((post, id) => {
                    if ( id+1 === active ) {
                        return <Rounded active={true} />
                    }
                    return <Rounded active={false} />
                })}
            </XStack>
        </View>
    );
}
const ImageChild: React.FC<ImageChildProps> = ({ src }) => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <View h={400} w={windowWidth-25} bg={"black"}  position={"relative"}>
            <Image position={"absolute"} top={0} left={0} w={"100%"} h={450} resizeMode={"cover"} flex={1} source={{
                uri:src
            }} />
        </View>
    );
}