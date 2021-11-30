"use strict";
/*
AR portal appears with location name. Portal displays 360 video from cloud storage.
*/
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { HomePage } from "./HomePage";
import {
  ViroText,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
  ViroMaterials,
  ViroImage,
  ViroButton,
} from "react-viro";

//Adding styles for Location name - text
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

export const FirstScene = class extends Component {
  render() {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => {}}
        >
          <ViroPortal position={[0, 0, -1]} scale={[0.25, 0.25, 0.25]}>
            <Viro3DObject
              source={require("./res/portal_picture_frame/portal_picture_frame.vrx")}
              resources={[
                require("./res/portal_picture_frame/portal_picture_frame_diffuse.png"),
                require("./res/portal_picture_frame/portal_picture_frame_normal.png"),
                require("./res/portal_picture_frame/portal_picture_frame_specular.png"),
              ]}
              type="VRX"
            />
          </ViroPortal>
          <Viro360Video
            source={
              this.props.location.url
                ? { uri: this.props.location.url }
                : require("./res/Windsor.mp4")
            }
            loop={true}
          />
        </ViroPortalScene>

        <ViroText
          text={this.props.location.name}
          scale={[0.1, 0.1, 0.1]}
          height={1}
          width={1}
          position={[0, -0.18, -1]}
          materials={["frontMaterial", "backMaterial", "sideMaterial"]}
          extrusionDepth={8}
          style={styles.textstyle}
        />

        <ViroButton
          scale={[0.1, 0.1, 0.1]}
          height={0.8}
          width={0.8}
          position={[0, -0.25, -1]}
          source={require("./res/Home.png")}
          onClick={() => {
            this.props.sceneNavigator.pop();
          }}
        />
      </ViroARScene>
    );
  }
};
