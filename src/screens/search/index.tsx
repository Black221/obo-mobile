import { ICON_SIZE } from '@/constants/dimentions'
import { MAIN_COLORS } from '@/constants/styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, XStack, Button, ScrollView } from 'tamagui'
import Filter from './components/filter'
import { SearchInput } from './components/searchInput'
import { useState } from 'react';
import { LargeUserDisplay, MediumUserDisplay } from '@/components/userDisplay'
import PostsList from '../home/components/postsList'
import { SafeAreaView } from 'react-native'

export default function SearchScreen () {

    const [showFilter, setShowFilter] = useState<boolean>(false)

    return (
        <ScrollView bg={"whitesmoke"} nestedScrollEnabled={true} space={'$6'} showsVerticalScrollIndicator={false} >
            <View  mt={'$6'}>
                <Text textAlign='center' fontSize={28} w={"80%"} mx={"auto"} letterSpacing={1} color={MAIN_COLORS.primary}>
                    Search Screen 
                </Text>
                <Text textAlign='center' fontSize={16} w={"70%"} mx={"auto"} color={'$gray10'}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                </Text>
            </View>

            <SearchInput value={''} onChange={() => {}} onSubmit={() => {}} />

            <View paddingBottom={"$6"}>
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

                <View>
                    <Text color={"$gray10"} fontSize={20} padding={'$2'}>Résultats</Text>
                </View>

                <XStack alignItems='center' paddingHorizontal={'$2'}>
                    <Ionicons name="person" size={ICON_SIZE} color={"hsl(0, 0%, 52.3%)"} />
                    <Text flex={1} color={"$gray10"} fontSize={16} padding={'$2'}>Utilisateurs</Text>
                    <XStack alignItems='center'>
                        <Text color={MAIN_COLORS.primary} fontSize={14} fontWeight={"bold"} padding={'$2'}>Voir tout</Text>
                        <Ionicons name="chevron-forward" size={ICON_SIZE} color={MAIN_COLORS.primary} />
                    </XStack>
                </XStack>

                <ScrollView 
                    horizontal={true} showsHorizontalScrollIndicator={false}
                    paddingVertical={'$2'}
                >
                    <MediumUserDisplay avatar={"https://i.pravatar.cc/300"} userName={"John Doe"} info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."} details={false} />
                    <MediumUserDisplay avatar={"https://i.pravatar.cc/300"} userName={"John Doe"} info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."} details={false} />
                    <MediumUserDisplay avatar={"https://i.pravatar.cc/300"} userName={"John Doe"} info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."} details={false} />
                    <MediumUserDisplay avatar={"https://i.pravatar.cc/300"} userName={"John Doe"} info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."} details={false} />
                    <MediumUserDisplay avatar={"https://i.pravatar.cc/300"} userName={"John Doe"} info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."} details={false} />
                </ScrollView>

                <XStack alignItems='center' paddingHorizontal={'$2'}>
                    <MaterialCommunityIcons name='post-outline' color={"hsl(0, 0%, 52.3%)"} size={ICON_SIZE} />
                    <Text flex={1} color={"$gray10"} fontSize={16} padding={'$2'}>Posts</Text>
                </XStack>

                <PostsList  posts={[{
                    id: '1',
                    user: {
                        id: '1',
                        userName: 'John Doe',
                        avatar: 'https://i.pravatar.cc/300',
                    },
                    content: [{
                        type: 'image', uri: 'https://picsum.photos/800'
                    }, {
                        type: 'image', uri: 'https://picsum.photos/700'
                    }, {
                        type: 'image', uri: 'https://picsum.photos/700'
                    }],
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                    likes: 10,
                    comments: 10,
                    shares: 10,
                    createdAt: '2 hours ago',
                    updatedAt: '2 hours ago',
                    isBlockedByMe: false,
                    isFollowedByMe: false,
                    isMutedByMe: false,
                    isReportedByMe: false,
                    isSavedByMe: false,
                    isSharedByMe: false,
                },
                {
                    id: '2',
                    user: {
                        id: '1',
                        userName: 'John Doe',
                        avatar: 'https://i.pravatar.cc/300',
                    },
                    content: [{
                        type: 'image', uri: 'https://picsum.photos/980'
                    }],
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                    likes: 10,
                    comments: 10,
                    shares: 10,
                    createdAt: '2 hours ago',
                    updatedAt: '2 hours ago',
                    isBlockedByMe: false,
                    isFollowedByMe: false,
                    isMutedByMe: false,
                    isReportedByMe: false,
                    isSavedByMe: false,
                    isSharedByMe: false,
                },
                {
                    id: '3',
                    user: {
                        id: '1',
                        userName: 'John Doe',
                        avatar: 'https://i.pravatar.cc/300',
                    },
                    content: [{
                        type: 'image', uri: 'https://picsum.photos/700'
                    }],
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
                    likes: 10,
                    comments: 10,
                    shares: 10,
                    createdAt: '2 hours ago',
                    updatedAt: '2 hours ago',
                    isBlockedByMe: false,
                    isFollowedByMe: false,
                    isMutedByMe: false,
                    isReportedByMe: false,
                    isSavedByMe: false,
                    isSharedByMe: false,
                    }]}
                />
            </View>

        </ScrollView>
    )
}

