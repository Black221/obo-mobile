import { useEffect, useState, useRef } from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";


export function InfinityScrolling(props :any) {


    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(true);
    const nextPageIdentifierRef = useRef<any>();
    const [isFirstPageReceived, setIsFirstPageReceived] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        getDataFromApi(null, nextPageIdentifierRef.current).then((response) => {

            const { data: newData, nextPageIdentifier } = parseResponse(response);
            setData([...data, newData]);
            nextPageIdentifierRef.current = nextPageIdentifier;
            setIsLoading(false);
            !isFirstPageReceived && setIsFirstPageReceived(true);
        });
    };

    const fetchNextPage = () => {
        if (nextPageIdentifierRef.current == null) {
            // End of data.
            return;
        }
        fetchData();
    };

    const getDataFromApi = ( data : any, nextPageIdentifier: any) => {
            // get the data from api
            return Promise.resolve({ data, nextPageIdentifier});
    };
    const parseResponse = (response: any) => {
        let _data = response.data;
        let nextPageIdentifier = response.nextPageIdentifier;
        // parse response and return list and nextPage identifier.
        return {
        data :_data,
        nextPageIdentifier,
        };
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }: any) => {
        return <Text>{item}</Text>;
    };

    const ListEndLoader = () => {
        if (!isFirstPageReceived && isLoading) {
        // Show loader at the end of list when fetching next page data.
        return <ActivityIndicator size={'large'} />;
        }
    };

    if (!isFirstPageReceived && isLoading) {
        // Show loader when fetching first page data.
        return <ActivityIndicator size={'small'} />;
    }

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            onEndReached={fetchNextPage}
            onEndReachedThreshold={0.8}
            ListFooterComponent={ListEndLoader} // Loader when loading next page.
        />
    );
}