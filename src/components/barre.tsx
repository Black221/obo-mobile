import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const barre = () => {
    return(
        <View style={styles.container}>
        <Text style={styles.leftText}>Most View</Text>
        <View style={styles.spacer} />
        <Text style={styles.rightText}>See More</Text>
        <Ionicons name="md-play" size={24} color="gray" style={styles.icon} />

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    leftText: {
      fontSize: 14,
    },
    spacer: {
      flex: 1, // Espace flexible entre les deux textes
    },
    rightText: {
      fontSize: 14,
    },
    icon:{
        color: '#6B4EFF'
    },
  });

    
    

  export default barre;
