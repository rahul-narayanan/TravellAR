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

/**
 * Home page functional component
 * This component is responsible for the display of the home page
 * It displays a animation page with the product name and a button to scan qr code
 * Once the button is clicked, the camera will get opened to scan the qr code
 * @returns home page
 */

const App = () => {
  const [showScan, setShowScan] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  /**
   * useEffect
   * This function will be called after each render
   * This animates the view with a duration of 1500ms ie. 1.5s
   */
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
      }).start();
    }, 1300);
  }, [fadeAnim]);

  /**
   * If button clicked, ViroARSceneNavigator will be rendered
   * with the home page which opens the camera to scan the qr code
   */
  if (showScan) {
    return <ViroARSceneNavigator initialScene={{ scene: HomePage }} />;
  }

  /**
   * Else, the home page will be displayed, with the animation
   * and a button to scan the qr code
   */
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
