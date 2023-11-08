import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import {ScrollView} from "tamagui";
import {ReactChildren} from "../../../../App";



type CategorieProps = {
    active: boolean,
    children?: string
}


type CategoriesProps = {
    children?: ReactChildren
}
export const Categorie: React.FC<CategorieProps> = ({ active, children }) => {
    return (
        active ? (
                <View style={styles.squareActive}>
                    <Text style={styles.textActive}>{children}</Text>
                </View>
            ) :
            (
                <View style={styles.square}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            )
    )
}
export const Categories: React.FC<CategoriesProps> = ({children}) => {
    return(
        <ScrollView horizontal={true} style={styles.container}>
            {children}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    square: {
      backgroundColor: '#D9D9D9',
      justifyContent: 'center', // Centrez le texte horizontalement
      alignItems: 'center',
      padding: 10,
      margin: 10, // Ajoutez un espacement autour du carré
      borderRadius:20,
    },
    text: {
      fontSize: 16,
      color: 'black',
        fontWeight: "bold"
    },
    textActive:{
        fontSize: 16,
      color: 'white',
        fontWeight: "bold"

    },

    squareActive:{
        backgroundColor: '#6B4EFF',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        borderRadius:20,
    },
  });

export default Categories;