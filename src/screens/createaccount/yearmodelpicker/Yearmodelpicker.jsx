import React from "react";
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./Yearmodelpicker.module";

const YearPickerModal = ({ visible, onDismiss, onSelectYear, name }) => {
    const currentYear = new Date().getFullYear();
    const startYears = Array.from({ length: 51 }, (_, index) => currentYear - index);
    const endYears = Array.from({ length: 65 }, (_, index) => currentYear - 50 + index).reverse();
  
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => {
        onSelectYear(item),
        onDismiss()
      }
      }>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              backgroundColor: item === currentYear ? "lightblue" : "transparent",
              paddingHorizontal: 10,
              color: item === currentYear ? "white" : "black",
              paddingVertical: 5,
              paddingHorizontal: item === currentYear ? 10 : 10,
              borderRadius: 20,
            }}
          >
            {item.toString()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  
    const handleOverlayPress = () => {
      onDismiss();
    };
  
    // Choose the appropriate array based on the picker type
    const years = name === "Start" ? startYears : endYears;
  
    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onDismiss}
      >
        <TouchableWithoutFeedback onPress={handleOverlayPress}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 10,
                paddingVertical: 20,
              }}
            >
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={styles.modelheading}>Select {name} Year</Text>
                <Text style={styles.modelpresent}>Present</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <FlatList
                  data={years}
                  numColumns={3}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.toString()}
                  style={{ maxHeight: 10 * (16 + 10) }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
  
  export default YearPickerModal;