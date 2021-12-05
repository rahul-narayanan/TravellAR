// components/signup.js

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import Logo from "./res/logo-small.png";

/**
 * Register functional component
 * Responsible for signing up the user with the details provided
 * supports validation and option to go back to signin page
 * @requires name
 * @requires email
 * @requires password
 * @returns register page
 * @throws error if the entered details are not valid
 */

export const Register = class extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      isLoading: false,
    };
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  /**
   * Method that gets called once the user enters the details and click register
   * Validates the details and registers the user in aws's cognito pool
   */
  registerUser = () => {
    if (this.state.email === "" && this.state.password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      this.setState({
        isLoading: true,
      });
      setTimeout(() => {
        Alert.alert("Registered successfully");
        this.props.onSuccess();
      }, 1000);
      // auth()
      //   .createUserWithEmailAndPassword(this.state.email, this.state.password)
      //   .then((res) => {
      //     res.user.updateProfile({
      //       displayName: this.state.displayName,
      //     });
      //     console.log("User registered successfully!");
      //     this.setState({
      //       isLoading: false,
      //       displayName: "",
      //       email: "",
      //       password: "",
      //     });
      //     this.props.navigation.navigate("Login");
      //   })
      //   .catch((error) => this.setState({ errorMessage: error.message }));
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View marginLeft={80} marginBottom={15} width="50%" height="20%">
          <Image source={Logo} width="10%" height="10%" flex={1} />
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Name"
          value={this.state.displayName}
          onChangeText={(val) => this.updateInputVal(val, "displayName")}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          maxLength={15}
          secureTextEntry={true}
          placeholderTextColor="black"
        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            borderColor: "#159AFF",
            alignItems: "center",
            width: 100,
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginLeft: 100,
            marginTop: 15,
          }}
        >
          <Button
            color="#159AFF"
            title="Sign up"
            onPress={() => this.registerUser()}
          />
        </TouchableOpacity>

        <Text style={styles.loginText} onPress={() => this.props.onLogin()}>
          Already Registered? Click here to login
        </Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  inputStyle: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1,
  },
  loginText: {
    color: "#159AFF",
    marginTop: 25,
    textAlign: "center",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
