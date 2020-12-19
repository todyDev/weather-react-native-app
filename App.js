import React from "react";
import * as Location from "expo-location";
import axios from "axios";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";

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
    } catch (error) {
      Alert.alert("Can't find you.", "So sad :(");
    }
  };

  getWeather = async (latitude, longitude) => {
    try {
      const {
        data: {
          main: { temp },
          weather
        }
      } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`);
      console.log(latitude, longitude);
      console.log(temp, weather);
      this.setState({ isLoading: false, temp, condition: weather[0] });
    } catch (error) {
      Alert.alert("Sorry.", "Please try again later :(");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
}
