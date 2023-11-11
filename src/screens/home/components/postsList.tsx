
import React from 'react';
import { FlatList, View } from 'react-native';
import PostItem from './postItem';

const PostsList = ({
    posts,
    onPress,
    } : any
) => {
    return (
        <FlatList
            data={posts}
            renderItem={({ item }) => (
                <PostItem
                    post={item}
                    onPress={onPress}
                />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    );
}

const styles = {
    separator: {
        height: 1,
        backgroundColor: '#E4E4E4',
    },
};

export default PostsList;