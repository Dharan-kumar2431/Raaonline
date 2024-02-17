import { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import Createaccountheader from '../../createaccount/header/CreatePageHeader';
import styles from './Privacypolicy.module';




const Privacypolicy = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View>
        <Createaccountheader navigation={navigation} name={"Change Password"} />
      </View>
      <View style={styles.pdfContainer}>
      </View>
    </View>
  );
}

export default Privacypolicy;
