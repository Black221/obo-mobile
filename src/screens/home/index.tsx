import {ScrollView, Text, View, YStack} from "tamagui";

import {Categories} from "./components/categories.component";
import {Stories} from "./components/stories.component";
import Header from "./components/header.component";
import Posts from "@screens/home/components/posts.component";


export default function Home(): React.FC<any> | JSX.Element {



    return (
        <ScrollView bg={"white"} space={20} paddingTop={10} showsVerticalScrollIndicator={false}>

            <YStack>
                <Header/>
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
