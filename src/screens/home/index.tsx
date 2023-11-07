import { View, Text, ScrollView } from "tamagui";
import { Header } from "./components/Header";
import Stories from "./components/Stories";

import { useState } from "react";
import Posts from "./components/Posts";


export default function Home() {


    return (
        <ScrollView bg={"white"} space={7}>
            <Header />
            <Stories />
            <Posts />
        </ScrollView>
    );
}
