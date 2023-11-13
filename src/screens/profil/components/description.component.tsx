import {Text, View} from 'tamagui';
import {useEffect, useState} from "react";

interface DescriptionProps {
    text: string
}
export const DescriptionComponent = ({text}:DescriptionProps) => {

    interface description {
        value: string;
        isComplet: boolean;
        getSubString(value: string):string
    }


    const [description, setDescription] = useState<description>( {
        isComplet: false,
        value: text,
        getSubString(value: string): string {
            return value.substring(0,100)+"... "
        }
    } );

    useEffect(() => {
        hideDescription();
    }, [text]);

    const showDescription = () => {
        setDescription(des => ({ ...des, value: text, isComplet:true}));
    }

    const hideDescription = () => {
        setDescription(des => ({...des, value: des.getSubString(text), isComplet:false}));
    }

    return (
        <View paddingHorizontal={'$2'} >
            <Text fontSize={16} >
                {description.value}
                {description.isComplet ? (
                    <Text fontWeight={"bold"} onPress={()=>hideDescription()} >
                        (masqué)
                    </Text>
                ) : (
                    <Text fontWeight={"bold"} onPress={()=>showDescription()} >
                        voir plus
                    </Text>
                ) }
            </Text>
        </View>
    )
}
