import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


import TabShape from './TabShape'
import TabBarButton from './TabBarButton'
import { DEVICE, ICON_SIZE, TAB_BAR_HEIGHT } from '@/constants/dimentions';
import { MAIN_COLORS } from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';




const styles = StyleSheet.create({
    myTabBarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: TAB_BAR_HEIGHT,
        width: DEVICE.width,
        margin: 0,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        elevation: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    inactiveLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
})






export default function MyTabBar({ state, descriptors, navigation }: any) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.myTabBarContainer}>
            <TabShape />
            <View style={StyleSheet.absoluteFill}>
                <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {state.routes.map((route: any, index: any) => {
                    const {options} = descriptors[route.key];
                    const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                    
                    const Icon = ({ focus }: any) => {
                        switch (label) {
                            case 'Home':
                                return <Ionicons name={
                                    focus ? 'home' : 'home-outline'
                                } size={ICON_SIZE} color={focus ? MAIN_COLORS.secondary : 'gray'} />
                            case 'Search':
                                return <Ionicons name={
                                    focus ? 'search' : 'search-outline'
                                } size={ICON_SIZE} color={focus ? MAIN_COLORS.secondary : 'gray'} />
                            case 'Reels':
                                return <Ionicons name={
                                    focus ? 'videocam' : 'videocam-outline'
                                } size={ICON_SIZE} color={focus ? MAIN_COLORS.secondary : 'gray'} />
                            case 'Profile':
                                return <Ionicons name={
                                    focus ? 'person' : 'person-outline'
                                } size={ICON_SIZE} color={focus ? MAIN_COLORS.secondary : 'gray'} />
                            default:
                                return <Ionicons name={
                                    focus ? 'home' : 'home-outline'
                                } size={ICON_SIZE} color={focus ? MAIN_COLORS.secondary : 'gray'} />
                        }
                    }
        
                    const isFocused = state.index === index;
        
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });
            
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };
        
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };
        
                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? {selected: true} : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.button}>
                            {options.tabBarButton ? (
                                <TabBarButton />
                            ) : (
                                <Icon focus={isFocused} />
                            )}
                        </TouchableOpacity>
                    );
                })}
                </View>
            </View>
        </View>
    );
}