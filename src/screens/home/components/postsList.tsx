
import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import PostItem from './postItem';
import { ScrollView } from 'tamagui';

const PostsList = ({
    posts,
    onPress,
    } : any
) => {
    return (
        <ScrollView horizontal={true} scrollEnabled={false} contentContainerStyle={{width: '100%', height: '100%'}}>
            <FlatList nestedScrollEnabled={true}
                horizontal={false} showsHorizontalScrollIndicator={false}
                data={posts}
                renderItem={({item}) => (
                    <PostItem
                        {...item}
                    />
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </ScrollView>
    );
}

const styles = {
    separator: {
        height: 1,
        backgroundColor: '#E4E4E4',
    },
};

export default PostsList;