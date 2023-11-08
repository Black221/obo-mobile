import { FontAwesome5 } from "@expo/vector-icons";
import { View, XStack, Image, Text } from "tamagui";
import { useState, useEffect } from "react";
import useAxiosFunction from "@/hooks/useAxios";
import { imgInstance } from "@/api/imgApi";

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
            : <View space={0}>
                {users.map((user: any, id) => (
                    <Post key={id} username={user.first_name} avatar={user.avatar} post={user.avatar} />
                ))}
            </View>}
        </View>
    )
}


function Post ({username, avatar, post} : any) {

    return (
        <View position="relative">
            <XStack p={20} alignItems="center">
                <XStack flex={1} space={10} alignItems="center">
                    <Image w={32} h={32} borderRadius={32} source={{
                        uri: avatar ? avatar : "http://placekitten.com/200/300"
                    }} />
                    <Text>{username}</Text>
                </XStack>
                <View>
                    <FontAwesome5 name="ellipsis-v" size={18} color="black" />
                </View>
            </XStack>
            <View h={450} bg={"red"}>
                <Image h={"100%"}  source={{
                    uri: post ? post : "http://placekitten.com/200/300"
                }} />
            </View>
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