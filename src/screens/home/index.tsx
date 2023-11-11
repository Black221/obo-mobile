import {ScrollView, Text, View, XStack, YStack} from "tamagui";

import {Stories} from "./components/stories.component";
import { HomeHeader } from "@/components/screenHeaders";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { MAIN_COLORS } from "@/constants/styles";
import { ICON_SIZE } from "@/constants/dimentions";
import PostItem from "./components/postItem";


export default function HomeScreen() {



    return (
        <ScrollView bg={"white"} mb={0}  paddingVertical={10} showsVerticalScrollIndicator={false}>

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
                <PostItem 
                    user={{
                        avatar: "https://i.pravatar.cc/300",
                        userName: "John Doe"
                    }}
                    content={[
                        {
                            type: "image",
                            uri: "https://i.pravatar.cc/300"
                        }
                    ]}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."}
                    likes={0}
                    comments={0}
                    shares={0}
                    createdAt={"2 hours ago"}
                    updatedAt={"2 hours ago"}
                    isBlockedByMe={false}
                    isFollowedByMe={false}
                    isMutedByMe={false}
                    isReportedByMe={false}
                    isSavedByMe={false}
                    isSharedByMe={false}
                />
                <PostItem 
                    user={{
                        avatar: "https://i.pravatar.cc/300",
                        userName: "John Doe"
                    }}
                    content={[
                        {
                            type: "image",
                            uri: "https://i.pravatar.cc/300"
                        },{
                            type: "image",
                            uri: "https://i.pravatar.cc/300"
                        },{
                            type: "image",
                            uri: "https://i.pravatar.cc/300"
                        }
                    ]}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."}
                    likes={0}
                    comments={0}
                    shares={0}
                    createdAt={"2 hours ago"}
                    updatedAt={"2 hours ago"}
                    isBlockedByMe={false}
                    isFollowedByMe={false}
                    isMutedByMe={false}
                    isReportedByMe={false}
                    isSavedByMe={false}
                    isSharedByMe={false}
                />
                
            </YStack>

        </ScrollView>
    );
}
