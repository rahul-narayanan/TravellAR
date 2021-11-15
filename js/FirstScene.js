"use strict";
/*
AR portal appears with location name. Portal displays 360 video from cloud storage.
*/
import React from "react";
import { StyleSheet } from "react-native";
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

var createReactClass = require("create-react-class");

export const FirstScene = createReactClass({
  render: function () {
    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene
          passable={true}
          dragType="FixedDistance"
          onDrag={() => { }}
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
          <Viro360Video source={{ uri: "https://dolfj4z6ydqsd.cloudfront.net/Sea.mp4" }}
            loop={true} />
        </ViroPortalScene>

        <ViroImage
          scale={[0.1, 0.1, 0.1]}
          height={0.35}
          width={0.35}
          position={[-0.1, -0.17, -1]}
          source={require("./res/Hotspot_icon.png")}
        />

        <ViroText
          text="Riverfront"
          scale={[0.1, 0.1, 0.1]}
          height={1}
          width={1}
          position={[0, -0.18, -1]}
          materials={["frontMaterial", "backMaterial", "sideMaterial"]}
          extrusionDepth={8}
          style={styles.textstyle}
        />
      </ViroARScene>
    );
  },
});
