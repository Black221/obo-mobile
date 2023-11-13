import {View, ScrollView, Text, Image, XStack} from 'tamagui';
import {DescriptionComponent} from "@screens/profil/components/description.component";
import {CoverComponent} from "@screens/profil/components/cover.component";
import {ContactComponent} from "@screens/profil/components/contact.component";
import {StatComponent} from "@screens/profil/components/stat.component";
import { Ionicons } from '@expo/vector-icons';
import { MAIN_COLORS } from '@/constants/styles';
import PostsListDouble from '@/components/postsListDouble';
import { SafeAreaView } from 'react-native';
import { TAB_BAR_HEIGHT } from '@/constants/dimentions';


const SERVICES = [
    {
        id: 1,
        name: "Service 1",
        image: "http://placekitten.com/200/200",
        description: "Service 1 description"
    },
    {
        id: 2,
        name: "Service 2",
        image: "http://placekitten.com/200/200",
        description: "Service 2 description"
    },
    {
        id: 3,
        name: "Service 3",
        image: "http://placekitten.com/200/200",
        description: "Service 3 description"
    }
]

export const ProfilScreen = () => {

    const imageTest:string = "http://placekitten.com/200/300";
    const textDescrition = "This is the most no sens description  for describe what we do because I really have no more inspiration and this part of text must be write in 4 lines or more, so follow us and take tour 😆 "

    return (
        <SafeAreaView style={{
            paddingBottom: TAB_BAR_HEIGHT + 20
        }}>
            <ScrollView space={'$2'} bg={'whitesmoke'}>

                <CoverComponent coverImage={imageTest} profilImage={imageTest} profilName={"Stark Industry"}/>

                <View  position="relative" space={'$2'}  >
                    
                    {/* Information personnel */}
                    <View>
                        <DescriptionComponent text={textDescrition} />
                    </View>

                    <ContactComponent/>
                    
                    <StatComponent likes={5000000} views={50000000} followers={1500000} />

                    {/* Services */}

                    <View >
                        <Text fontSize={20} color={"$gray10"}  > Services </Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                            {SERVICES.map((service) => (
                                <View key={service.id} borderWidth={1} overflow='hidden' borderColor={'$gray6'} h={300} margin={'$2'} bg={"white"} borderRadius={'$2'} >
                                    <View h={200} bg={"#D9D9D9"}  >
                                        <Image source={{uri: service.image}} w={200} h={200}  />
                                    </View>
                                    <View flex={1} p={'$2'} >
                                        <Text fontSize={16} fontWeight={"bold"} > {service.name} </Text>
                                        <Text fontSize={14} color={"$gray10"} > {service.description} </Text>
                                    </View>
                                    <View bg={"$gray6"} h={1} />
                                    <XStack p={'$2'} justifyContent={"space-between"} >
                                        <XStack>
                                            <Ionicons name="heart-outline" size={20} color={MAIN_COLORS.primary} />
                                            <Text fontSize={14} color={"$gray10"} > 5K </Text>
                                        </XStack>
                                        <XStack>
                                            <Ionicons name="eye-outline" size={20} color={MAIN_COLORS.primary} />
                                            <Text fontSize={14} color={"$gray10"} > 5K </Text>
                                        </XStack>
                                    </XStack>
                                </View>
                            ))}
                        </ScrollView>
                    </View>

                    {/* Publication */}
                    <View space={'$2'}>
                        <Text fontSize={20} color={"$gray10"}  > Publications </Text>
                        {/* menu choice between posts and visuel */}
                        <XStack m={'$2'} justifyContent='space-evenly' alignItems='center' bg={'white'} height={40}>
                            <View>
                                <Text fontSize={18} color={"$gray10"}  > Posts </Text>
                            </View>
                            <View bg={"$gray6"} h={30} w={1} />
                            <View>
                                <Text fontSize={18} color={"$gray10"}  > Visuels </Text>
                            </View>
                        </XStack>

                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{width: '100%'}}>
                            <PostsListDouble data={[
                                {
                                    image : "http://placekitten.com/200/300",
                                    title: "test", 
                                    description: "test",
                                    user: "John Doo"
                                },
                                {
                                    image : "http://placekitten.com/200/300",
                                    title: "test", 
                                    description: "test",
                                    user: "John Doo"
                                },
                                {
                                    image : "http://placekitten.com/200/300",
                                    title: "test", 
                                    description: "test",
                                    user: "John Doo"
                                },
                                {
                                    image : "http://placekitten.com/200/300",
                                    title: "test", 
                                    description: "test",
                                    user: "John Doo"
                                }
                            ]} />
                        </ScrollView>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}
