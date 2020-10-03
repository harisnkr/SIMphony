import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, Button, Vibration } from 'react-native';
import * as firebase from "firebase";
import Line from '../components/Line';
import ModalDropdown from 'react-native-modal-dropdown';

export default class Profile extends Component {
  state = {
    email: "",
    displayName: ""
  };

  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;
    this.setState({ email, displayName });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <View style={styles.wholescreen}>
        <ImageBackground
          style={styles.image}
          blurRadius={5}
          source={require('../../assets/simcampus.jpg')}>
          <View style={styles.topcontainer}>
            <View style={{ marginTop: 25 }}></View>
            <Image
              source={require('../../assets/user.jpg')}
              style={{ width: 150, height: 150, borderRadius: 100, alignSelf: 'center' }} />
            <Text style={styles.nameFont}>Harisankar Kuppusamy</Text>
            <View style={{ marginTop: 1 }}></View>
          </View>
        </ImageBackground>

        <View style={styles.textbox}>
          <View style={{ marginTop: 15 }}></View>
          <Text style={styles.credentialName}>Email </Text>
          <Text style={styles.credentials}>{this.state.email} </Text>
          <Text style={styles.credentialName} >UOL SRN </Text>
          <Text style={styles.credentials}>170280873 </Text>
          <Text style={styles.credentialName}>SIM No. </Text>
          <Text style={styles.credentials}>10184527 </Text>
          <Text style={styles.credentialName}>Enrolled course</Text>
          <Text style={styles.credentials}>University of London - BSc Computing and Information Systems</Text>
          <Line />
          <Text style={styles.feenotification}>No outstanding fees for this semester.</Text>
          <View style={{ marginTop: 10 }}></View>


          <View style={{ flexDirection: "row", justifyContent: 'center' }}>
            <ModalDropdown
              defaultValue='  Select invoice to view..  '
              textStyle={{ marginLeft: 2, fontSize: 15, alignItems: "center", justifyContent: 'center', }}
              dropdownTextStyle={{ fontSize: 15 }}
              options={['2017-1', '2017-2', '2018', '2019']}
              style={{ borderColor: '#8A8F9E', borderRadius: 5, borderWidth: 1, height: 30, marginRight: 10 }} />
            <Button title="View" onPress={console.log('pressed')} style={{ marginLeft: 5, height: "90%" }} >
            </Button>
          </View>
        </View>
        <View style={styles.logoutButtonArea}>
          <Button title="Logout" onPress={this.signOutUser} color='#A80000' >
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  wholescreen: {
    flex: 1,
    alignItems: "center"
  },

  topcontainer: {
    flex: 0.75,
    flexDirection: "column",
    alignItems: "center"
  },

  textbox: {
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    flex: 1,
  },

  nameFont: {
    color: "#fff",
    fontSize: 20,
    textTransform: "uppercase",
    alignSelf: 'flex-start',
    borderRadius: 4,
    fontWeight: '600',
    textShadowRadius: 3,
    alignSelf: "center",
    marginTop: 10
  },


  credentialName: {
    color: "#8A8F9E",
    fontSize: 12,
    alignSelf: 'flex-start',
    textShadowRadius: 3,
    textTransform: 'uppercase'
  },

  credentials: {
    // backgroundColor: '#8A8F9E',
    color: "#000",
    fontSize: 15,
    alignSelf: 'flex-start',
    textShadowRadius: 5,
  },

  image: {
    flex: 0.75,
    resizeMode: "cover",
    flexDirection: "column",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },


  feenotification: {
    alignSelf: 'center',
    color: '#009862',
    fontWeight: 'bold',
    textShadowRadius: 3,
    fontSize: 15
  },


  logoutButtonArea: {
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 10
  }
});
