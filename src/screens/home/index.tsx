import {ScrollView, Text, View, YStack} from "tamagui";

import {Categories} from "./components/categories.component";
import {Stories} from "./components/stories.component";
import Header from "./components/header.component";
import Posts from "@screens/home/components/posts.component";
import { HomeHeader } from "@/components/screenHeaders";


export default function HomeScreen() {



    return (
        <ScrollView bg={"white"}  paddingTop={10} showsVerticalScrollIndicator={false}>

            <HomeHeader/>
            
            <YStack>
                <Text p={10} fontWeight={"bold"} fontSize={16} >Categories</Text>
                <Categories/>
                <Text p={10} fontWeight={"bold"} fontSize={16} >Stories</Text>
                <Stories/>
                <Text p={10} fontWeight={"bold"} fontSize={16} >Actuality</Text>
                <Posts/>
            </YStack>
        </ScrollView>
    );
}
