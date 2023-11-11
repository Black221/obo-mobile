import SearchBar from '@/screens/search/components/search'
import { View, Text } from 'tamagui'
import circle  from '@/components/name&descrip'
import PostsListDouble from '@/components/postsListDouble'

export default function SearchScreen () {

    const onSearch = (text: string) => {
        console.log(text)
    }

    const onSubmit = () => {
        console.log('submit')
    }

    return (
        <View>
            <SearchBar onSearch={onSearch} onSubmit={onSubmit} />
            <PostsListDouble data={[
                { image: 'https://picsum.photos/200', title: 'title', description: 'description', user: 'user' },
                { image: 'https://picsum.photos/200', title: 'title', description: 'description', user: 'user' },
                { image: 'https://picsum.photos/200', title: 'title', description: 'description', user: 'user' },
                { image: 'https://picsum.photos/200', title: 'title', description: 'description', user: 'user' },
                { image: 'https://picsum.photos/200', title: 'title', description: 'description', user: 'user' },
                { image: 'https://picsum.photos/200', title: 'title', description: 'description', user: 'user' },
                { image: 'https://picsum.photos/200', title: 'title', description: 'description', user: 'user' },
                { image: 'https://picsum.photos/200', title: 'title', description: 'description', user: 'user' },
            ]} />
        </View>
    )
}

