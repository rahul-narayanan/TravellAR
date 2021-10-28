import React, { Component } from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";
import { ViroARSceneNavigator } from "react-viro";
import FirstScene from "./FirstScene";
import HomePage from "./HomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showScan: false };
  }

  render() {
    if (this.state.showScan) {
      return <ViroARSceneNavigator initialScene={{ scene: HomePage }} />;
    }

    return (
      <ImageBackground
        source={{
          uri: "https://res.litfad.com/site/img/item/2020/09/14/1758200/584x584.jpg",
        }}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Button
            title="SCAN QR CODE"
            onPress={() => {
              this.setState({ showScan: true });
            }}
          />
        </View>
      </ImageBackground>
    );
  }
}

// Some styles given to button
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    margin: 30,
    textAlign: "left",
    color: "blue",
    fontStyle: "italic",
    fontFamily: "Calibri",
    fontSize: 28,
  },
});
