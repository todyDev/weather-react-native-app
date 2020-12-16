import React from "react";
import * as Location from "expo-location";
import axios from "axios";
import { StyleSheet, Text, View, Alert } from "react-native";
import Loading from "./Loading";

const API_KEY = "";

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
      this.getWeather(latitude, longitude);
      this.setState({ latitude, longitude });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad :(");
    }
  };

  getWeather = async (latitude, longitude) => {
    console.log(process.env.NODE_ENV);
    try {
      const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
      console.log(latitude, longitude);
      console.log(data);
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      Alert.alert("Sorry.", "Please try again later :(");
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
