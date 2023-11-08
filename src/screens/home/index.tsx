import {ScrollView, Text, View, YStack} from "tamagui";

import { useState } from "react";
import {Categorie, Categories} from "./components/categories.component";
import {Story, Stories} from "./components/stories.component";
import Header from "./components/header.component";
import Barre from "@components/barre";
import IconButton from "@components/IconButton";
import Profil from "@components/profil";
import Barre1 from "@components/barre1";
import Posts from "@screens/home/components/posts.component";


export default function Home(): React.FC<any> | JSX.Element {



    return (
        <ScrollView bg={"white"} space={20} paddingTop={10} showsVerticalScrollIndicator={false}>
            <Header/>

            <YStack>
                <Text fontWeight={"bold"} fontSize={16} >Categories</Text>
                <Categories/>

            </YStack>

            <YStack>
                <Text fontWeight={"bold"} fontSize={16} >Stories</Text>
                <Stories/>
            </YStack>

            <YStack>
                <Text fontWeight={"bold"} fontSize={16} >Actuality</Text>
                <Posts/>
            </YStack>
        </ScrollView>
    );
}
