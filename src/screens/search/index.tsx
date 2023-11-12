import { ICON_SIZE } from '@/constants/dimentions'
import { MAIN_COLORS } from '@/constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { View, Text, Input, XStack, Button, ScrollView } from 'tamagui'
import Filter from './components/filter'
import { SearchInput } from './components/searchInput'
import { useState } from 'react';
import PostsListDouble from '@/components/postsListDouble'

export default function SearchScreen () {

    const [showFilter, setShowFilter] = useState<boolean>(false)

    return (
        <ScrollView paddingTop={'$6'} space={'$6'} showsVerticalScrollIndicator={false} >
            <View>
                <Text textAlign='center' fontSize={28} w={"80%"} mx={"auto"} letterSpacing={1} color={MAIN_COLORS.primary}>
                    Search Screen 
                </Text>
                <Text textAlign='center' fontSize={16} w={"70%"} mx={"auto"} color={'$gray10'}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </Text>
            </View>

            <SearchInput value={''} onChange={() => {}} onSubmit={() => {}} />

            <View>
                <XStack alignItems='center'  padding={'$2'}>
                    <Text color={"$gray10"} flex={1} fontSize={20}>Filtre</Text>
                    <View w={40} h={40} bg={"$gray2"} borderRadius={40} alignItems='center' justifyContent='center' onPress={
                        () => setShowFilter(!showFilter)
                    }>
                        <Ionicons name="options" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                    </View>
                </XStack>

                {showFilter && (<View space={"$2"} padding={'$2'}>
                
                    <Filter label='Catégorie' filter={['Tous', 'Sport', 'Musique', 'Jeux']} getFilter={(value: string) => console.log(value)} />
                    <Filter label='Type' filter={['Tous', 'Public', 'Privé']} getFilter={(value: string) => console.log(value)} />
                    <Filter label='Prix' filter={['Tous', 'Gratuit', 'Payant']} getFilter={(value: string) => console.log(value)} />
                
                    <Button  onPress={() => {}} bg={"white"} m={'$3'} fontSize={16} >Appliquer filtre</Button>
                </View>)}

                
            </View>
        </ScrollView>
    )
}

