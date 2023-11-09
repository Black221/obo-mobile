import React, {useState} from "react";
import {FlatList} from "react-native";
import {View} from "tamagui";


const Media: React.FC<{src: string, w:number, h:number}> = ({ src, w, h }) => {
    return (
        <View bg={src} w={w} h={h} ></View>
    );
}

export const CameraScreen: React.FC = () => {
    const [layout, setLayout] = useState({
        width: 0,
        height: 0,
    });

    return (

        <FlatList
            onLayout={(event) => setLayout(event.nativeEvent.layout)}
            pagingEnabled={true}
            showsVerticalScrollIndicator={false}
            data={["red", "yellow", "green"]}
         renderItem={({item}) =>
            <Media src={item} w={layout.width} h={layout.height} />
        }
        />
    )
}