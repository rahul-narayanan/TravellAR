import { AppRegistry } from "react-native";
import TravellAR from "./app-init";

/**
 * Entry point file for ios
 */
AppRegistry.registerComponent("TravellAR", () => TravellAR);

// The below line is necessary for use with the TestBed App
AppRegistry.registerComponent("ViroSample", () => TravellAR);
