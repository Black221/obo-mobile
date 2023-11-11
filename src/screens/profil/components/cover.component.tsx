import {Text, View, Image} from 'tamagui';
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    coverImage: {
        position: "absolute",
        height: 200,
        width: "100%",
        flex: 1,
        resizeMode: 'cover',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },

    profilImage: {
        position: "absolute",
        height: 150,
        width: 150,
        flex: 1,
        resizeMode: 'cover',
        borderRadius: 75,
    }
});
interface CoverProps {
    coverImage: string;
    profilImage: string;
    profilName: string;
}

export const CoverComponent = ({ coverImage, profilImage, profilName }:CoverProps = {
    coverImage: "http://placekitten.com/200/300",
    profilImage: "http://placekitten.com/200/300",
    profilName: "Stark Insdustry"
}) => {
    return (
        <View height={300} bg={'white'} >
            <View h={200} borderBottomLeftRadius={20} borderBottomRightRadius={20}  bg={"#D9D9D9"}  position={"relative"} justifyContent="flex-end" alignItems="center">
                <Image style={styles.coverImage} source={{
                    uri:coverImage
                }} />
                <View position={"relative"}  top={100} h={200} w={200} space={10} justifyContent="flex-end" alignItems="center">
                    <View position={"relative"} h={150} w={150} borderRadius={75} bg={"#AAACAE"} justifyContent="center" alignItems="center">
                        <Image style={styles.profilImage} source={{
                            uri:profilImage
                        }} />
                    </View>
                    <Text fontSize={18} fontWeight={"bold"} > {profilName} </Text>
                </View>
            </View>
        </View>
    )

}
