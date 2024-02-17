import { View, Text } from "react-native";
import styles from "./Aboutus.module";
import Createaccountheader from "../../createaccount/header/CreatePageHeader";

const Aboutus = ({ navigation }) => {
  return (
    <View>
      <View>
        <Createaccountheader navigation={navigation} name={"About Us"} />
      </View>
      <View style={{padding:10}}>
        <Text style={{fontSize:13}}>
          Raaonline is an E-learning website on important medical specialties
          providing critical and timely reinforcement to practicing
          professionals as well as students who have a periodic need for
          additional support in academics as well as practical-experience based
          guidance on day-to-day clinics and cases.{" "}
        </Text>

        <Text style={{marginTop:10,fontSize:13}}>
          The website carries several contents in user friendly media forms,
          developed by some of the most established clinicians and teachers from
          India and abroad, that provide a handy point of reference at all times
          The website incorporates textbook knowledge, procedural videos,
          animations, relevant latest reference guidelines and articles to be
          available to practicing medicos at the touch of a screen.{" "}
        </Text>

        <Text style={{marginTop:10,fontSize:13}}>
          RAAOnline provides an integrated wealth of book knowledge, online
          videos and live surgical experiences on a single efficient and easy
          smart platform never before available in this domain.
        </Text>
      </View>
    </View>
  );
};

export default Aboutus;
