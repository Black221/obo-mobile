import {Text, View, Image, XStack, YStack, ScrollView} from 'tamagui';
import {FontAwesome5} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {DescriptionComponent} from "@screens/profil/components/Description/description.component";
import {CoverComponent} from "@screens/profil/components/Cover/cover.component";
import {ContactComponent} from "@screens/profil/components/Contact/contact.component";
import {StatComponent} from "@screens/profil/components/Stat/stat.component";
//  16 =>
//  18 =>
//  20 =>
export const ProfilScreen = () => {

    const imageTest:string = "http://placekitten.com/200/300";
    const textDescrition = " lord This is the most no sens description  for describe what we do because I really have no more inspiration and this part of text must be write in 4 lines or more, so follow us and take tour 😆 "

    return (
        <ScrollView>
            <View m={10} position="relative" space={15}  >
                <CoverComponent coverImage={imageTest} profilImage={imageTest} profilName={"Stark Industry"}/>
                <DescriptionComponent text={textDescrition} />
                <ContactComponent/>
                <StatComponent likes={5000000} views={5000} followers={50} />
            </View>
        </ScrollView>

    )

}
