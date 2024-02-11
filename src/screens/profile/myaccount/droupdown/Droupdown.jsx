import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import styles from "./Droupdown.module";

const DropdownComponent = ({ data, value, onChange, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    console.log(value)
    const defaultValue = data.find((item) => item.value === value);
    console.log(defaultValue)
    if (defaultValue) {
      setSelectedValue(defaultValue);
    }
  }, [value, data]);

  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={selectedValue}
        onChange={(item) => {
          setSelectedValue(item);
          onChange(item.value);
        }}
      />
    </View>
  );
};

export default DropdownComponent;
