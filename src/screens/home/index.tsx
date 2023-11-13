import {ScrollView, Text, View, XStack, YStack} from "tamagui";

import {Stories} from "./components/stories.component";
import { HomeHeader } from "@/components/screenHeaders";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { MAIN_COLORS } from "@/constants/styles";
import { ICON_SIZE, TAB_BAR_HEIGHT } from "@/constants/dimentions";
import PostItem from "./components/postItem";
import PostsList from "./components/postsList";
import { SafeAreaView } from "react-native";


export default function HomeScreen() {



    return (
        <SafeAreaView style={{
            paddingBottom: TAB_BAR_HEIGHT + 20
        }}>

            <ScrollView bg={"whitesmoke"} nestedScrollEnabled={true}  mb={0}  paddingVertical={10} showsVerticalScrollIndicator={false}>

                <HomeHeader/>
                
                <YStack>
                    <XStack p={"$2"} space={"$2"}>
                        <Ionicons name="md-bookmark-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary} />
                        <Text  fontWeight={"bold"} color={"$gray11"} fontSize={18} >Suivies</Text>
                    </XStack>
                    <Stories/>
                </YStack>

                <YStack paddingBottom={20}>
                    <XStack p={"$2"} space={"$2"}>
                        <MaterialCommunityIcons name="post-outline" size={ICON_SIZE} color={MAIN_COLORS.secondary}/>
                        <Text  fontWeight={"bold"} color={"$gray11"} fontSize={18} >Posts</Text>
                    </XStack>

                        
                    <PostsList  posts={[{
                        id: '1',
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
                    },
                    {
                        id: '2',
                        user: {
                            id: '1',
                            userName: 'John Doe',
                            avatar: 'https://i.pravatar.cc/300',
                        },
                        content: [{
                            type: 'video', uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
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
                    
                </YStack>


            </ScrollView>

            
        </SafeAreaView>
    );
}
