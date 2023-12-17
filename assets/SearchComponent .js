import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Handle the search functionality based on the searchText
    console.log('Search Text:', searchText);
    // Add your search logic here
  };

  return (
    
    <View style={{ padding: 16 }}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 8,
          marginBottom: 16,
          marginTop:120,
        }}
        placeholder="Enter your search"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#3498db',
          paddingVertical: 10,
          paddingHorizontal: 16,
          borderRadius: 5,
          alignItems: 'center',
        }}
        onPress={handleSearch}
      >
        <Text style={{ color: 'white' }}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
