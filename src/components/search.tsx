import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


interface SearchBarProps {
  onSearch: (text: string) => void;
  onSubmit: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <Ionicons name="md-search" size={24} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchText}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Ionicons name="md-send" size={24} color="gray" />
      </TouchableOpacity>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 305,
        height: 40,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 10,
        marginTop: 50, // Marge supérieure pour afficher la barre en haut
        marginHorizontal: 10,
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        padding: 10,
      },
      button: {
        padding: 0,
      },
});

export default SearchBar;
