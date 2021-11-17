import BG from "./res/app-bg-low.gif";

import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, ImageBackground, Animated } from "react-native";
import { ViroARSceneNavigator } from "react-viro";
import HomePage from "./HomePage";
import { Button } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 100,
  },
  button: {
    backgroundColor: "grey",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 10,
  },
});

const App = () => {
  const [showScan, setShowScan] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
      }).start();
    }, 1300);
  }, [fadeAnim]);

  if (showScan) {
    return <ViroARSceneNavigator initialScene={{ scene: HomePage }} />;
  }

  return (
    <ImageBackground
      // source={{
      //   uri: "https://res.litfad.com/site/img/item/2020/09/14/1758200/584x584.jpg",
      // }}
      source={BG}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: fadeAnim,
            },
          ]}
        >
          <Button
            title="SCAN QR CODE"
            onPress={() => setShowScan(true)}
            buttonStyle={styles.button}
          />
        </Animated.View>
      </View>
    </ImageBackground>
  );
};

export default App;
