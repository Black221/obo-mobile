import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const categorie= () => {
    return(
        <View style={styles.container}>
           <View style={styles.square}>
           <Text style={styles.text}>Short</Text>
           </View>

           <View style={styles.square1}>
           <Text style={styles.text1}>Medium...</Text>
           </View>

           <View style={styles.square}>
           <Text style={styles.text}>Long... ... ...</Text>
           </View>

           <View style={styles.square}>
           <Text style={styles.text}>Long... ... ...</Text>
           </View>

        </View>

        
        

    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -20,
        
        
        
        


    },
    square: {
      backgroundColor: '#D9D9D9',
      justifyContent: 'center', // Centrez le texte horizontalement
      alignItems: 'center', // Centrez le texte verticalement
      padding: 10, // Ajoutez un espace autour du texte
      margin: 10, // Ajoutez un espacement autour du carré
      borderRadius:20,
    },
    text: {
      fontSize: 16,
      color: 'black',
    },

    text1:{
        fontSize: 16,
      color: 'white',

    },

    square1:{
        backgroundColor: '#6B4EFF',
        justifyContent: 'center', // Centrez le texte horizontalement
        alignItems: 'center', // Centrez le texte verticalement
        padding: 10, // Ajoutez un espace autour du texte
        margin: 10, // Ajoutez un espacement autour du carré
        borderRadius:20,
    },
  });

export default categorie;