// components/login.js

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

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isLoading: false,
    };
    this.emailInputRef = React.createRef();
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.emailInputRef.current.focus();
    // }, 100);
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  userLogin = () => {
    if (this.state.email === "" || this.state.password === "") {
      Alert.alert("Enter details to Sign in!");
    } else {
      this.setState({
        isLoading: true,
      });
      setTimeout(() => {
        Alert.alert("Signed in successfully");
        this.props.onSuccess();
      }, 1000);
      //     .auth()
      //     .signInWithEmailAndPassword(this.state.email, this.state.password)
      //     .then((res) => {
      //       console.log(res);
      //       console.log("User logged-in successfully!");
      //       this.setState({
      //         isLoading: false,
      //         email: "",
      //         password: "",
      //       });
      //       this.props.navigation.navigate("Dashboard");
      //     })
      //     .catch((error) => this.setState({ errorMessage: error.message }));
      this.props.onSuccess();
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
          ref={this.emailInputRef}
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor="black"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, "email")}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor="black"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, "password")}
          maxLength={15}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            //borderWidth: 1,
            //borderColor: "#159AFF",
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
            title="Sign In"
            onPress={() => this.userLogin()}
            style={styles.loginButton}
          />
        </TouchableOpacity>
        <Text
          style={styles.loginText}
          onPress={() => {
            this.props.onRegister();
          }}
        >
          Don't have account? Click here to signup
        </Text>
      </View>
    );
  }
}

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
  loginButton: {
    borderRadius: 10,
    borderWidth: 1,
  },
});
