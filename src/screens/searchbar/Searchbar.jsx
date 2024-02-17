import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./Searchbar.module";
import { SearchBar } from "react-native-elements";
import { Color } from "../../components/misc/Colors";

const SearchBarComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [typingTimer, setTypingTimer] = useState(null);

  useEffect(() => {
    return () => {
      clearTimeout(typingTimer);
    };
  }, [searchText]);

  const handleTyping = (text) => {
    setSearchText(text);
    clearTimeout(typingTimer);
    const timer = setTimeout(() => {
      onSearch(text);
    }, 500);
    setTypingTimer(timer);
  };

  return (
    <View style={styles.container}>
      <SearchBar
            placeholder="Search..."
            onChangeText={handleTyping}
            value={searchText}
            placeholderTextColor={Color.SECONDARYCOLOR}
            containerStyle={styles.searchBarContainer}
            inputContainerStyle={styles.inputContainer}
            platform="default"
            searchIcon={<FontAwesome name="search" color={Color.SECONDARYCOLOR} size={16} />}
          />
    </View>
  );
};

export default SearchBarComponent;
