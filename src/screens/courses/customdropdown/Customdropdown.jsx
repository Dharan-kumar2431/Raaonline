import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomDropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSelectOption = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text>Dropdown</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownMenu}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={option.disabled ? styles.disabledOption : styles.option}
              onPress={() => handleSelectOption(option)}
              disabled={option.disabled}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    position: "relative",
    zIndex:999
  },
  dropdownHeader: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  disabledOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "lightgray",
  },
});

export default CustomDropdown;
