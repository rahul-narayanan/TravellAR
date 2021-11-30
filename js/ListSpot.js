import React, { Component, Fragment } from "react";
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
import { Locations } from "./locations";

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
  // getScene(id) {
  //   switch (id) {
  //     case "riverside":
  //       return RiverScene;
  //     case "bridge":
  //       return BridgeScene;
  //     case "museum":
  //       return MuseumScene;
  //     case "restaurant":
  //     default:
  //       return RestaurantScene;
  //   }
  // }

  handleLocationClick(location) {
    this.props.sceneNavigator.push({
      scene: FirstScene,
      passProps: { location },
    });
  }

  render() {
    return (
      <ViroARScene key={`${Date.now()}`}>
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
          style={{ flexDirection: "row", padding: 0.5 }}
          width={3.0}
          height={3.0}
          position={[-2, 1.5, -4]}
          rotation={[0, 0, 0]}
        >
          {Locations.map((location) => (
            <ViroImage
              key={`button_${location.id}`}
              source={location.imgSrc}
              style={{ flex: 0.8, padding: 1 }}
              height={0.3}
              width={0.6}
              onClick={() => this.handleLocationClick(location)}
              //onTouch={() => this.handleLocationClick(location)}
            />
          ))}
        </ViroFlexView>
      </ViroARScene>
    );
  }
}