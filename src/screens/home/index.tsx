import { View, Text, Image } from "tamagui";
import { imgInstance } from "@api/imgApi";
import useAxiosFunction from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Home() {

    const [
        response, error, loading, fetch
    ] = useAxiosFunction();
    const [user, setUser] = useState({
        avatar: '',
        first_name: '',
        last_name: ''
    });

    const  sendRequest = async (id: number) => {
        await fetch({
            axiosInstance: imgInstance,
            method: 'GET',
            url: "/api/users/"+ id,
            requestConfig: []
        })
    }

    const generateId = () => {
        return Math.floor(Math.random() * 30) + 1;
    }

    useEffect(() => {
        if (response) {
            setUser(response.data);
            console.log(response.data)
        }
    }, [response])

    useEffect(() => {
        sendRequest(generateId());
    }, [])

    return (
        <View>
            <Text>Home</Text>
            {loading ? <Text>Loading...</Text> : <User userObject={user} />}            
            <TouchableOpacity onPress={() => sendRequest(generateId())}>
                <Text>Send Request</Text>
            </TouchableOpacity>
        </View>
    )

}

function User({ userObject = null } : any) {
    return (
      <View>
        <Image
          source={{ uri: userObject.avatar }}
          style={{ width: 200, height: 200, borderRadius: 100 }}
        />
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          {`${userObject.first_name} ${userObject.last_name}`}
        </Text>
      </View>
    );
  }