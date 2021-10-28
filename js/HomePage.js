import Smiley from "./res/emoji_smile_anim_a/emoji_smile_anim_a.vrx";

import React, { Component } from "react";

import { StyleSheet } from "react-native";
import {
  ViroARScene,
  ViroText,
  ViroARTrackingTargets,
  ViroBox,
  ViroARImageMarker,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroConstants,
  ViroNode,
} from "react-viro";
import { FirstScene } from "./FirstScene";

const styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 50,
    color: "#e0f2f1",
    textAlignVertical: "center",
    textAlign: "center",
  },
});

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      pauseUpdates: false,
    };
    this.onInitialized = this.onInitialized.bind(this);
    this.onImageFound = this.onImageFound.bind(this);
  }

  onInitialized(state, reason) {
    // if (state === ViroConstants.TRACKING_NORMAL) {
    // }
  }

  onImageFound(scene) {
    this.setState(
      {
        pauseUpdates: true,
      },
      () => {
        this.props.sceneNavigator.push({ scene });
      }
    );
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        <ViroAmbientLight color="#aaaaaa" />
        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0, -1, -0.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow
        />
        <ViroARImageMarker
          target={"targetOne"}
          onAnchorFound={() => this.onImageFound(FirstScene)}
          pauseUpdates={this.state.pauseUpdates}
        />
      </ViroARScene>
    );
  }
}

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require("./res/emoji_smile_anim_a/QRCode.png"),
    orientation: "Up",
    physicalWidth: 1.8, // real world width in meters
  },
});
