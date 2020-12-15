import React from "react";
import * as Location from "expo-location";
import { StyleSheet, Text, View, Alert } from "react-native";
import Loading from "./Loading";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false, latitude, longitude });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad :(");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, latitude, longitude } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <View style={styles.container}>
        <Text style={styles.text}>
          {latitude} {longitude}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 300,
    fontSize: 15
  }
});
