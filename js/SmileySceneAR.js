import Smiley from "./res/emoji_smile_anim_a/emoji_smile_anim_a.vrx";

import React, { Component } from "react";

import { StyleSheet } from "react-native";
import {
    ViroARScene, ViroText,
    Viro3DObject, ViroAmbientLight,
    ViroSpotLight, ViroConstants
} from "react-viro";

const styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: "Arial",
        fontSize: 60,
        color: "#fff",
        textAlignVertical: "center",
        textAlign: "center"
    }
});

export default class SmileySceneAR extends Component {
    constructor() {
        super();
        this.state = {
            loadingText: "Initializing AR..."
        };
        this.onInitialized = this.onInitialized.bind(this);
    }

    onInitialized(state, reason) {
        if (state === ViroConstants.TRACKING_NORMAL) {
            this.setState({
                loadingText: "TravellAr"
            });
        }
    }

    render() {
        return (
            <ViroARScene onTrackingUpdated={this.onInitialized}>
                <ViroText
                    text={this.state.loadingText}
                    scale={[0.1, 0.1, 0.1]}
                    height={1}
                    width={4}
                    position={[0, 0.2, -1]}
                    style={styles.helloWorldTextStyle}
                />
                <ViroAmbientLight color="#aaaaaa" />
                <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -0.2]} position={[0, 3, 1]} color="#ffffff" castsShadow />
                <Viro3DObject
                    source={Smiley}
                    position={[0, 0, -1]}
                    scale={[0.2, 0.2, 0.2]}
                    type="VRX"
                    dragType="FixedDistance"
                    onDrag={() => {}}
                />
            </ViroARScene>
        );
    }
}
