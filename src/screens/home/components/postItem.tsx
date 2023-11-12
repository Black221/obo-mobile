
import { View, Text, YStack, XStack, Input } from "tamagui"
import { SmallUserDisplay, UserComment } from "../../../components/userDisplay"
import { MAIN_COLORS } from "@/constants/styles";
import { TextDescription } from "../../../components/textDisplay";
import { DisplayMultiMedia, RenderMedia } from "../../../components/mediaDisplay";
import { Ionicons } from "@expo/vector-icons";


const PostActions = ({}) => {
    return (
        <XStack space={"$2"} p={"$2"} >
            <XStack space={"$2"} flex={1} >
                <Ionicons name="heart-outline" size={24} color={MAIN_COLORS.secondary} />
                <Ionicons name="chatbubble-outline" size={24} color={MAIN_COLORS.secondary} />
                <Ionicons name="share-social-outline" size={24} color={MAIN_COLORS.secondary} />
            </XStack>
            <XStack space={"$2"} >
                <Ionicons name="bookmark-outline" size={24} color={MAIN_COLORS.secondary} />
            </XStack>
        </XStack>
    )
}

const PostComments = ({}) => {
    return (
        <View p={"$2"} space={"$2"}>
            <Input placeholder={"Add a comment"} />
            <View>
                <UserComment 
                    avatar={"https://i.pravatar.cc/300"}
                    userName={"John Doe"}
                    time={"2 hours ago"}
                    comment={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."}
                />
            </View>
        </View>
    )
}



const PostItem = ({
    user,
    content,
    description,
    likes,
    comments,
    shares,
    createdAt,
    updatedAt,
    isBlockedByMe,
    isFollowedByMe,
    isMutedByMe,
    isReportedByMe,
    isSavedByMe,
    isSharedByMe,

}: any) => {



    return (
        <YStack bg={"white"} margin={"$2"} space={"$2"} borderWidth={1} borderColor={"$gray6"} borderRadius={"$4"}>
            <SmallUserDisplay 
                avatar={user.avatar}
                userName={user.userName}
                time={createdAt}
                details={true}
            />
            <View>
                <TextDescription text={description+description+description} styles={
                    {
                        container: { },
                        text: {
                            fontSize: 16,
                            paddingHorizontal: 10
                        },
                        more: {
                            inactive: { color: "blue" },
                            active: { color: "black" }
                        }
                    }
                } />
            </View>

            <View  m={"$2"}>
                <Text>
                this is for tag!!
                </Text>
            </View>

            {content && content.length > 1 ? (
                <DisplayMultiMedia media={content} />
            ) : (
                content.length === 1 &&  <RenderMedia media={content[0]} styles={{
                    container: {},
                    media: {
                        height: 220,
                        width: "100%",
                        flex: 1,
                        resizeMode: 'cover',
                    },
                    info: {
                        display: "hidden"
                    }
                }} />
            )}

            <PostActions />

            <PostComments />
            
        </YStack>
    )
}



export default PostItem;