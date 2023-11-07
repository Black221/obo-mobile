import { View, Text, XStack, ScrollView, Image } from "tamagui"
import useAxiosFunction from "@hooks/useAxios"
import { imgInstance } from "@/api/imgApi";
import { useEffect, useState } from "react";
// import { LinearGradient } from "@tamagui/linear-gradient";

export default function Stories () {

    const  [response, error, loading, fetch] = useAxiosFunction();

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch({
            axiosInstance: imgInstance,
            url: "api/users?page=1",
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
        <ScrollView space={10} horizontal>
            <MyStory />
            {loading ? <Text>Loading...</Text> : <XStack space={18}>
                {users.map((user: any) => (
                    <Story first_name={user.first_name} avatar={user.avatar} last_name={user.last_name} />
                ))}
            </XStack>}
        </ScrollView>
    )
}

function Story ({first_name, last_name, avatar}: any) {
    
    return (
        <View>
            <View position="relative" w={100} h={100} bg={"red"} borderRadius={100} alignItems="center" justifyContent="center">
                {/* <LinearGradient
                    position="absolute"
                    w={100} h={100}
                    borderRadius="$4"
                    colors={['$red10', '$yellow10']}
                    start={[0, 1]}
                    end={[0, 0]}
                />     */}
                <Image source={{ uri: avatar }} w={94} h={94} borderRadius={110} borderWidth={4} borderColor={"white"} />
            </View>
            <Text textAlign="center">{first_name}</Text>
        </View>
    )
}

function MyStory () {
    
    return (
        <View ml={20}>
            <View w={100} h={100}  borderRadius={100}>
                <Image source={{ uri: "http://placekitten.com/200/300" }} w={94} h={94} borderRadius={110} borderWidth={4} borderColor={"white"} />
            </View>
            <Text textAlign="center">Your Story</Text>
        </View>
    )
}