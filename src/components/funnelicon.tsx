import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const funnel=() => {
    return(
        <View style={styles.container}>
        <View style={styles.circle}>
            <Ionicons name="md-funnel" size={24} color="gray" style={styles.icon} />
        </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: -20,
        
        
        
        


    },
    circle: {
      backgroundColor: '#6B4EFF',
      justifyContent: 'center', // Centrez le texte horizontalement
      alignItems: 'center', // Centrez le texte verticalement
      padding: 10, // Ajoutez un espace autour du texte
      margin: 10, // Ajoutez un espacement autour du carré
      borderRadius:30,
    },
    icon: {
        flex: 1,
        padding: 10,
      
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

export default funnel;
