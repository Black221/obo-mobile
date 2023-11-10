import {View, ScrollView} from 'tamagui';
import {DescriptionComponent} from "@screens/profil/components/description.component";
import {CoverComponent} from "@screens/profil/components/cover.component";
import {ContactComponent} from "@screens/profil/components/contact.component";
import {StatComponent} from "@screens/profil/components/stat.component";
//  16 =>
//  18 =>
//  20 =>
export const ProfilScreen = () => {

    const imageTest:string = "http://placekitten.com/200/300";
    const textDescrition = "This is the most no sens description  for describe what we do because I really have no more inspiration and this part of text must be write in 4 lines or more, so follow us and take tour 😆 "

    return (
        <ScrollView>
            <View m={10} position="relative" space={15}  >
                <CoverComponent coverImage={imageTest} profilImage={imageTest} profilName={"Stark Industry"}/>
                <DescriptionComponent text={textDescrition} />
                <ContactComponent/>
                <StatComponent likes={5000000} views={50000000} followers={1500000} />
            </View>
        </ScrollView>

    )

}
