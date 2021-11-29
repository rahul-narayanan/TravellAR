import React, { Component } from "react";
import { FirstScene } from "./FirstScene";
import {
  ViroFlexView,
  ViroText,
  ViroImage,
  ViroAmbientLight,
  ViroARScene,
  ViroSpotLight,
  ViroMaterials,
  ViroButton,
} from "react-viro";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  textstyle: {
    fontFamily: "Arial",
    fontSize: 35,
    textAlignVertical: "center",
    textAlign: "center",
  },
});

ViroMaterials.createMaterials({
  frontMaterial: {
    diffuseColor: "#80deea",
  },
  backMaterial: {
    diffuseColor: "#e0f7fa",
  },
  sideMaterial: {
    diffuseColor: "#26c6da",
  },
});

export default class ListSpot extends Component {
  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#aaaaaa" />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow
        />
        <ViroFlexView
          style={{ flexDirection: "column", padding: 0.1 }}
          width={3.0}
          height={3.0}
          position={[-5, 0, -1]}
          rotation={[0, 45, 0]}
        >
          <ViroButton
            source={require("./res/Riverside.jpg")}
            style={{ flex: 0.5 }}
            height={0.8}
            width={0.8}
            onClick={() => {
              this.props.sceneNavigator.push({ scene: FirstScene });
            }}
          />
          <ViroButton
            source={require("./res/Bridge.jpg")}
            style={{ flex: 0.5 }}
            height={0.8}
            width={0.8}
            onClick={() => {
              this.props.sceneNavigator.push({ scene: FirstScene });
            }}
          />
          <ViroButton
            source={require("./res/Museum.jpg")}
            style={{ flex: 0.5 }}
            height={0.8}
            width={0.8}
            onClick={() => {
              this.props.sceneNavigator.push({ scene: FirstScene });
            }}
          />
          <ViroButton
            source={require("./res/Restaurant.jpg")}
            style={{ flex: 0.5 }}
            height={0.8}
            width={0.8}
            onClick={() => {
              this.props.sceneNavigator.push({ scene: FirstScene });
            }}
          />
        </ViroFlexView>
      </ViroARScene>
    );
  }
}
