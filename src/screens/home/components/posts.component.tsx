import { FontAwesome5 } from "@expo/vector-icons";
import {View, XStack, Image, Text, YStack, ScrollView, useGroupItem} from "tamagui";
import React, {useState, useEffect, ReactNode, useRef} from "react";
import useAxiosFunction from "@/hooks/useAxios";
import { imgInstance } from "@/api/imgApi";
import { ReactChildren } from "App";
import {
    Dimensions,
    NativeScrollEvent,
    NativeSyntheticEvent,
    FlatList,
    Image as RImage,
    View as RView,
    Animated,
    PanResponder
} from "react-native";

type MediaBoxProps = {
    children?: ReactChildren,
    posts:string[]
}
type MediaProps = {
    src:string,
    width?:number
}
type PostProps = {
    userName: string,
    avatar: string,
    posts: string[],
    time: string,
    location: string
}
type PostHeaderProps = {
    avatar:string,
    userName:string,
    time:string,
    location:string,
}

export default function Posts () {
    const  [response, error, loading, fetch] = useAxiosFunction();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch({
            axiosInstance: imgInstance,
            url: "api/users?page=2",
            method: "GET",
            requestConfig: []
        })
    }, [])
    
    useEffect(() => {
        if (response) {
            console.log(response.data);
            setUsers(response.data);
        }
    }, [response])

    return (
        <View>
            {loading ? <View><Text>Loading...</Text></View> 
            : <View>
                {users.map((user: any, id) => (
                    <Post key={id} userName={user.first_name} avatar={user.avatar} posts={[user.avatar, user.avatar, user.avatar,user.avatar  ]} time={"2 hours ago"} location={"New York"} />
                ))}
            </View>}
        </View>
    )
}
export const Post: React.FC<PostProps> = ({userName, avatar, posts, time, location}) => {
    return (
        <View position="relative" borderColor={"#0000004D"} borderWidth={1} borderRadius={20} m={10} >
            <PostHeader avatar={avatar} location={location} time={time} userName={userName}/>
            <MediaBox posts={posts}/>
            <PostFooter/>
            <PostAddon/>
        </View>
    )
}



const PostHeader: React.FC<PostHeaderProps> = ({avatar, userName, time, location}) => {
    return (
        <XStack p={20} alignItems="center">
            <XStack flex={1} space={10} alignItems="center">
                <Image w={32} h={32} borderRadius={32} source={{
                    uri: avatar ? avatar : "http://placekitten.com/200/300"
                }} />
                <YStack>
                    <Text fontWeight={"bold"} >{userName}</Text>
                    <Text color={"gray"} >{time} - {location} </Text>
                </YStack>
            </XStack>
            <View transform={"rotate(90deg)"} >
                <FontAwesome5 name="ellipsis-v" size={18} color="black" />
            </View>
        </XStack>
    );
}
const PostFooter: React.FC = () => {
    return (
        <XStack p={20} pt={16}>
            <XStack space={16} flex={1}>
                <FontAwesome5 name="heart" size={28} color="black" />
                <FontAwesome5 name="comment" size={28} color="black" />
                <FontAwesome5 name="paper-plane" size={28} color="black" />
            </XStack>
            <View>
                <FontAwesome5 name="bookmark" size={28} color="black" />
            </View>
        </XStack>
    );
}
const PostAddon: React.FC = () => {
    return (
        <View p={20} pt={0} space={10}>
            <Text>8 j'aimes</Text>
            <XStack flex={1} space={10} alignItems="center">
                <Image w={32} h={32} borderRadius={32} source={{
                    uri: "http://placekitten.com/200/300"
                }} />
                <Text>Ajouter un commentaire</Text>
            </XStack>
            <Text>il y'a 3 jours</Text>
        </View>
    );
}
const MediaBox: React.FC<MediaBoxProps> = ({posts}) => {

    //[TODO] Animations for rounded *later
        const [opacity, __] = useState(new Animated.Value(1))
        const [width,___] = useState(new Animated.Value(1))
        // const pushValue = 1;
        // const pushToLeft = () => {
        //     const animatedPosition = Animated.spring(postion, {
        //         toValue: pushValue * (active-1),
        //         // duration: 1,
        //         useNativeDriver: true
        //     });

        //     animatedPosition.start(({finished}) => {
        //         if (finished) {
        //             animatedPosition.reset()
        //             setPostion(new Animated.Value(pushValue * (active-1)))
        //             // postion.setOffset(20);
        //
        //         }
        //     })
        // }
        // const pushToRight = () => {
        //     const animatedPosition = Animated.spring(postion, {
        //         toValue: -pushValue*(active-1),
        //         // duration: 1,
        //         useNativeDriver:true
        //     });
        //
        //     animatedPosition.start(({finished}) => {
        //         if ( finished ) {
        //             animatedPosition.reset()
        //             setPostion(new Animated.Value(-pushValue*(active-1)))
        //         }
        //     })
        //
        // }

     enum ANIMATION_METHOD {
            SCROLL_LEFT,
            SCROLL_RIGHT,
            SET_CURRENT,
            DOWN_CURRENT,
            NOTHING
    }


    enum POST_SCROLL {
        LEFT,
        RIGHT,
        NOTHING
    }
    const RoundedChild : React.FC<{activated:boolean, id:number, animate?:ANIMATION_METHOD}> = ({activated, id, animate}) => {
        const [postion, setPostion] = useState(new Animated.ValueXY({x:0, y:0}))
        const [active, setActive] = useState<boolean>();
        useEffect(() => {
            setActive(activated)
        }, [activated]);

        useEffect(() => {
            // onScrollToLeft()
            if (animate === ANIMATION_METHOD.SCROLL_LEFT){
                onScrollToLeft()
            }else if (animate === ANIMATION_METHOD.SCROLL_RIGHT){
                onScrollToRight()
            }else if (animate === ANIMATION_METHOD.SET_CURRENT){
                onActive()
            }else if (animate === ANIMATION_METHOD.DOWN_CURRENT){
                onInActive()
            }

        }, [animate]);
        const onScrollToLeft = () => {
            Animated.stagger(125, [
                Animated.timing(postion.x, {
                    toValue: 100,
                    useNativeDriver:true,
                    delay:1000
                })
            ]).start()
        }

        const onScrollToRight =  () => {
            Animated.timing(postion.x, {
                toValue: -100,
                useNativeDriver:true,
                delay:1000
            }).start()
        }

        const onActive =  () => {
            Animated.stagger(125, [
                Animated.timing(postion.y, {
                    toValue: -2,
                    useNativeDriver:true,
                    delay:1000
                })
            ]).start()
        }

        const onInActive =  () => {
            Animated.stagger(125, [
                Animated.timing(postion.y, {
                    toValue: 0,
                    useNativeDriver:true,
                    delay:1000
                })
            ]).start()
        }

        return (
                <Animated.View
                    style={[
                        {
                            overflow: "hidden",
                            position: "relative",
                            borderRadius: 5,
                            width: 50,
                            height: 5,
                            opacity,
                            zIndex: 2,
                            backgroundColor: "gray",
                            transform:[
                                {
                                    translateY:postion.y
                                },
                            ]
                        }
                    ]}
                >
                    {active?
                        (< Animated.View
                            style={[
                                {
                                    position: "absolute",
                                    borderRadius: 5,
                                    width: 50,
                                    height: 5,
                                    opacity,
                                    zIndex: 2,
                                    backgroundColor: "red",
                                    transform: [
                                {
                                    translateX: postion.x
                                },
                                {
                                    scaleX: width
                                }
                                    ]
                                },
                            ]}
                        />)
                    :   (< Animated.View
                            style={[
                                {
                                    position: "absolute",
                                    borderRadius: 5,
                                    width: 50,
                                    height: 5,
                                    opacity,
                                    zIndex: 2,
                                    // backgroundColor: "red",

                                },
                            ]}
                        />)
                    }
                </Animated.View>
        )
    }
    const Rounded: React.FC<{active:boolean, posts: string[], action:POST_SCROLL}> = ({active, posts, action}) => {

        const [activated, setActivated] = useState<boolean[]>([true, false, false, false]);
        const [animations, setAnimations] = useState<ANIMATION_METHOD[]>([ANIMATION_METHOD.SET_CURRENT, ANIMATION_METHOD.NOTHING, ANIMATION_METHOD.NOTHING, ANIMATION_METHOD.NOTHING]);

        useEffect(() => {

            //setTimeout( () =>  setAnimations([ANIMATION_METHOD.SCROLL_LEFT, ANIMATION_METHOD.DOWN_CURRENT, ANIMATION_METHOD.NOTHING, ANIMATION_METHOD.NOTHING]), 1500 )

            // setAnimations( activated => [...activated].map(el => el ? ANIMATION_METHOD.SET_CURRENT : ANIMATION_METHOD.DOWN_CURRENT) )

            if (action === POST_SCROLL.LEFT){
                // const newActivated:boolean[] = [];
                // let value = false
                // for (const active of [...activated]) {
                //     newActivated.push(value)
                //     value = false
                //     if (active)
                //         value = true
                // }
                // console.log(newActivated)
                //

                // setActivated( activated => {
                //     let value = false
                //     return [...activated].map(el => {
                //         return value
                //         value=false
                //         if (el)
                //             value = true
                //     })
                // })


                setActivated( activated => activated.map((el, id) => id === 2 ))

                console.log(activated)
            }

        }, [action]);


        return (
                posts.map((i, id) => (
                    <RoundedChild id={id} activated={activated[id]} animate={animations[id]}/>
                ))
        )
    }

    const [scroll, setScroll] = useState<POST_SCROLL>(POST_SCROLL.NOTHING);
    const [active, setActive] = useState(1);
    const [layout, setLayout] = useState({
        width: 0,
        height: 0,
    });

    function onScrollEnd(e:any) {
        const windowWidth = Dimensions.get('window').width;
        let pageNumber = Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.x / windowWidth + 0.5) + 1, 0), posts.length);
        if ( pageNumber >= active ) {
            //scroll left
            setScroll(POST_SCROLL.LEFT)
        }else {
            setScroll(POST_SCROLL.RIGHT)
        }
        setActive(pageNumber)
    }

    return (
        <RView
            style={{
                height: 450,
            }}
           onLayout={(event) => setLayout(event.nativeEvent.layout)}
        >
            <FlatList
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                }}
                onMomentumScrollEnd={(e) => onScrollEnd(e)}
                data={posts}
                renderItem={( {item, index} ) => <Media key={index} width={layout.width} src={item} /> }

            />

            <XStack  width={"100%"} flex={1} justifyContent={"center"} alignItems={"flex-end"} space={10} position={"absolute"} bottom={10} >
                <Rounded active={true} posts={posts} action={scroll} />
            </XStack>
        </RView>
    );
}
const Media: React.FC<MediaProps> = ({ src, width }) => {
    return (
        <View width={width}  >
            <RImage style={ { width:"100%", height: "100%", resizeMode: "cover" } } source={{
                uri: src
            }} />
        </View>
    );
}