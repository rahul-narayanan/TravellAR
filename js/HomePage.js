import Smiley from "./res/emoji_smile_anim_a/emoji_smile_anim_a.vrx";

import React, { Component } from "react";

import { StyleSheet } from "react-native";
import {
    ViroARScene, ViroText, ViroARTrackingTargets, ViroBox, ViroARImageMarker, 
    Viro3DObject, ViroAmbientLight,
    ViroSpotLight, ViroConstants
} from "react-viro";

const styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: "Arial",
        fontSize: 50,
        color: "#e0f2f1",
        textAlignVertical: "center",
        textAlign: "center"
    }
});

export default class HomePage extends Component {

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
                loadingText: "Welcome to Windsor!"
            });
        }
    }
    
    render() {
    return (
       
        <ViroARScene onTrackingUpdated={this.onInitialized}>
                
                <ViroAmbientLight color="#aaaaaa" />
                <ViroSpotLight innerAngle={5} outerAngle={90} 
                direction={[0, -1, -0.2]} position={[0, 3, 1]} color="#ffffff" castsShadow />
                <ViroARImageMarker target={"targetOne"} >
                {/* <ViroBox position={[0, .5, -1]} scale={[.3, .3, .1]} /> */}
                <Viro3DObject
                    source={Smiley}
                    position={[0, 0, -1]}
                    scale={[1, 1, 0]}
                    type="VRX"
                    dragType="FixedDistance"
                    onDrag={() => {}}
                />
                <ViroText
                    text="Welcome to Windsor!" 
                    scale={[0.5, 0.5, 0.2]}
                    height={1}
                    width={1}
                    position={[0.5, 0.5, -1]}
                    style={styles.helloWorldTextStyle}
                /> 
                 </ViroARImageMarker>
        </ViroARScene>
                
         );
         
        }
              
    }
   
    ViroARTrackingTargets.createTargets({
        targetOne : {
      source : require('./res/emoji_smile_anim_a/QRCode.png'),
      orientation : "Up",
      physicalWidth : 1.8 // real world width in meters
    },
  });

  