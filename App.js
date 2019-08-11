import React, { Component } from 'react';
import { View } from 'react-native';
import { Container} from 'native-base'; 
import Converter from './src/converter';
import Header from './src/header'; 


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("./node_modules/native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container> 
        <Header/> 
        <Converter/>
      </Container>
      
    );
  }
}
