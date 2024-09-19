// src/components/LoadingAnimation.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSpring } from 'react-native-reanimated';

const LoadingAnimation: React.FC = () => {
  const animationValue = useSharedValue(0);

  animationValue.value = withRepeat(
    withSpring(1, { damping: 2, stiffness: 150 }),
    -1,
    false
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: animationValue.value }],
  }));

  return (
    <View style={styles.container}>
      {[...Array(5)].map((_, i) => (
        <Animated.View
          key={i}
          style={[
            styles.box,
            animatedStyle,
            { backgroundColor: ['#4c86f9', '#49a84c', '#f6bb02', '#f6bb02', '#2196f3'][i] },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  box: {
    width: 4,
    height: 50,
    marginHorizontal: 6,
  },
});

export default LoadingAnimation;
