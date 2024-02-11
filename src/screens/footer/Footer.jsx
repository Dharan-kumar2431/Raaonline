import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./Footer.module";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Footer = () => {
    const navigation = useNavigation();
    const [selectedIcon, setSelectedIcon] = useState("home");

    const handleIconPress = (iconName) => {
        setSelectedIcon(iconName);
        switch (iconName) {
            case "home":
                navigation.navigate("Homes");
                break;
            case "cart":
                navigation.navigate("Cart");
                break;
            case "downloads":
                navigation.navigate("Downloads");
                break;
            case "chat":
                navigation.navigate("Chat");
                break;
            case "profile":
                navigation.navigate("Profile");
                break;
            default:
                break;
        }
    };

    const getIconColor = (iconName) => {
        return selectedIcon === iconName ? "#0468CC" : "#bbe2fa";
    };

    return (
        <View style={styles.footer}>
            <View style={styles.footernav}>
                <TouchableOpacity onPress={() => handleIconPress("home")}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="home" size={26} color={getIconColor("home")} />
                        {selectedIcon === "home" && <View style={styles.selectedDot} />}
                        <Text style={styles.iconText}>Home</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconPress("cart")}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="shopping-cart" size={26} color={getIconColor("cart")} />
                        {selectedIcon === "cart" && <View style={styles.selectedDot} />}
                        <Text style={styles.iconText}>Cart</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconPress("downloads")}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="cloud-download" size={26} color={getIconColor("downloads")} />
                        {selectedIcon === "downloads" && <View style={styles.selectedDot} />}
                        <Text style={styles.iconText}>My Downloads</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconPress("chat")}>
                    <View style={styles.iconContainer}>
                        <FontAwesome name="comments" size={26} color={getIconColor("chat")} />
                        {selectedIcon === "chat" && <View style={styles.selectedDot} />}
                        <Text style={styles.iconText}>Chat</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconPress("profile")}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="account-circle" size={26} color={getIconColor("profile")} />
                        {selectedIcon === "profile" && <View style={styles.selectedDot} />}
                        <Text style={styles.iconText}>Profile</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Footer;
