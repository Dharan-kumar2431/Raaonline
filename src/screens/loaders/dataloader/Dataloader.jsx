import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './Dataloader.module';

const DataLoader = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -50,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 800,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 800,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 800,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    bounceAnimation.start();
    pulseAnimation.start();

    return () => {
      bounceAnimation.stop();
      pulseAnimation.stop();
    };
  }, [translateY, scaleValue]);

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <BlurView intensity={100} style={styles.loaderContainer}>
        <View style={styles.card}>
          <Animated.View style={[styles.ball, { transform: [{ translateY }, { scale: scaleValue }] }]} />
          <Animated.Text style={[styles.text, { opacity: translateY.interpolate({
              inputRange: [-50, 0],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }) }]}>
            Loading...
          </Animated.Text>
        </View>
      </BlurView>
    </View>
  );
};


export default DataLoader;
