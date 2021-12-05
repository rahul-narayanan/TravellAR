"use strict";
/*
Scan QR code 'image' - Navigate to AR Scene
*/
import React, { Component } from "react";
import {
  ViroARScene,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroAmbientLight,
  ViroSpotLight,
  //ViroConstants
} from "react-viro";
import ListSpot from "./ListSpot";

/**
 * Home page functional component
 * Opens the camera in the mobile devices and waits for the qr code
 * once qr code is captured, returns the locations to be displayed
 * for that particular qr code
 */

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
    /*  if (state === ViroConstants.TRACKING_NORMAL) {
          this.setState();
       } */
  }

  /**
   * Method called after the qr code is recognized
   * @param {*} scene - Target scene to display for the scanned qr code
   */
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
          onAnchorFound={() => this.onImageFound(ListSpot)}
          pauseUpdates={this.state.pauseUpdates}
        />
      </ViroARScene>
    );
  }
}

/**
 * Creating targets for the qr codes that can be scanned
 */
ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require("./res/emoji_smile_anim_a/QRCode.png"),
    orientation: "Up",
    physicalWidth: 1.8, // real world width in meters
  },
});
