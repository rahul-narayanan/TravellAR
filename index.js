import { AppRegistry } from "react-native";
import TravellAR from "./app-init";

/**
 * Entry point of the app that registers the app in app registry
 */
AppRegistry.registerComponent("TravellAR", () => TravellAR);

/**
 * Registering the component for development testing in viro media app
 */
AppRegistry.registerComponent("ViroSample", () => TravellAR);
