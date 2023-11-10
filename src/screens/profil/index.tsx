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
        <ScrollView space={18} bg={'white'}>
            <CoverComponent coverImage={imageTest} profilImage={imageTest} profilName={"Stark Industry"}/>
            <View m={10} mt={0} position="relative" space={18}  >
                
                {/* Information personnel */}

                <DescriptionComponent text={textDescrition} />
                <ContactComponent/>
                <StatComponent likes={5000000} views={50000000} followers={1500000} />

                {/* Publication */}

                

            </View>
        </ScrollView>

    )

}
