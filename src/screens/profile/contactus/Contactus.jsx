import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Color } from "../../../components/misc/Colors";
import styles from "./Contactus.module";
import Createaccountheader from "../../createaccount/header/CreatePageHeader";

const Contactus = ({ navigation }) => {
  const handleCall = () => {
    Linking.openURL("tel:+916374810236");
  };

  const handleWhatsApp = () => {
    Linking.openURL("https://api.whatsapp.com/send?phone=+916374810236");
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Createaccountheader navigation={navigation} name={"ContactUs"} />
      </View>
      <View style={styles.contactcontainer}>
        <Text style={{ fontSize: 14 }}>
          For Subscription & queries:{" "}
          <Text style={{ fontWeight: "500" }}>+91 6374810236</Text>
        </Text>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleCall}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="phone"
                size={24}
                color={Color.SECONDARYCOLOR}
                style={{ marginRight: 8 }}
              />
              <Text style={{color: Color.SECONDARYCOLOR}}>Phone</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { marginLeft: 20 }]}
            onPress={handleWhatsApp}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome
                name="whatsapp"
                size={24}
                color={Color.SECONDARYCOLOR}
                style={{ marginRight: 8 }}
              />
              <Text style={{color: Color.SECONDARYCOLOR}}>WhatsApp</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Contactus;
