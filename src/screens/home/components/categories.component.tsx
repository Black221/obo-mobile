import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, GestureResponderEvent} from 'react-native';
import {ScrollView, XStack} from "tamagui";
import {ReactChildren} from "../../../../App";
import {Story} from "@screens/home/components/stories.component";

type CategorieProps = {
    active: boolean,
    children?: string,
    resetActive(key:number):void,
    id:number
}



type CategoriesProps = {
    children?: ReactChildren,
}
export const Categorie: React.FC<CategorieProps> = ({ active, children, resetActive , id}) => {

    const [actived, setActived] = useState(active);

    useEffect(() => {
        setActived(active)
    }, [active]);

    return (
        actived ? (
                <View style={styles.squareActive} onTouchStart={() => resetActive(id)}>
                    <Text style={styles.textActive}>{children}</Text>
                </View>
            ) :
            (
                <View style={styles.square}  onTouchStart={() => resetActive(id)}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            )
    )
}

const categories: any = [
    {children: "short"},
    {children: "medium"},
    {children: "laaaarge"},
    {children: "extraaa laaaarge"},
    {children: "extraaa extraaa laaaarge"},
]
export const Categories: React.FC<CategoriesProps> = ({children}) => {
    const [ active, setActive ] = useState([false, false, false, false, false, false]);
    const resetActive = (key:number): void => {
        setActive(active => active.map( (a, id) => id === key));
    }
    return(
        <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
            <XStack>
                {categories.map( (categorie:any, id:number) => <Categorie key={id} id={id} active={active[id]}  resetActive={resetActive}>{categorie.children}</Categorie> )}
           </XStack>
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