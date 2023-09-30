import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

export class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;
    const handleSendEmergency = (type) => {
      navigation.navigate('Map',{type})
    
    };

    // TODO: Move this to the map page, and then update the address and location
    // TODO: For address we can use the google service api for getting the address
    

    return (
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1, padding: 10 }}>
        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.btn}>
              <Pressable style={styles.press}>
                <Ionicons name="md-notifications" size={27} color="black" />
              </Pressable>
            </View>
            <View style={styles.btn}>
              <Pressable style={styles.press}>
                <Ionicons name="md-person" size={27} color="black" />
              </Pressable>
            </View>
          </View>
          <View style={styles.emeBtnShadow}>
            <Pressable onPress={()=>handleSendEmergency('general')} style={styles.emeBtnRed}>
              <View style={styles.emeBtn}>
                <Image source={require("../assets/emergencyIcon.png")} />
              </View>
            </Pressable>
          </View>
          <View style={{ alignSelf: "center", marginTop: 30, opacity: 0.25 }}>
            <Text style={{ color: "#000" }}>Tap In case of emergency</Text>
          </View>
          <View style={styles.banner}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
              Emergency types
            </Text>
          </View>

          <View
            style={{
              marginTop: 30,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.emTypeBtn}>
                <Pressable onPress={()=>handleSendEmergency('medical')} style={styles.emTypeBtnPress}>
                  <Image source={require('../assets/medical.png')}  />
                  <Text style={{marginTop: 5}}>Medical</Text>
                </Pressable>
            </View>
            <View style={styles.emTypeBtn}>
                <Pressable onPress={()=>handleSendEmergency('fire')} style={styles.emTypeBtnPress}>
                  <Image source={require('../assets/fire.png')}  />
                  <Text style={{marginTop: 5}} >Fire</Text>
                </Pressable>
            </View>
            <View style={styles.emTypeBtn}>
                <Pressable onPress={()=>handleSendEmergency('crime')} style={styles.emTypeBtnPress}>
                  <Image source={require('../assets/shield.png')}  />
                  <Text style={{marginTop: 5}}>Crime</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#fffff",
    height: 42,
    width: 42,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 1 },
    borderRadius: 5,
    // shadowOpacity: 0.01,
    // shadowRadius: 1,
    elevation: 20,
  },
  press: {
    height: 41,
    width: 41,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  emeBtnShadow: {
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 1 },
    borderRadius: 1000,
    elevation: 20,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 100,
  },
  emeBtnRed: {
    backgroundColor: "#FF9E9E",
    height: 130,
    width: 130,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  emeBtn: {
    backgroundColor: "#FA4C4C",
    height: 110,
    width: 110,
    borderRadius: 1000,
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "#9EE8FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  emTypeBtn: {
    backgroundColor: "#fffff",
    height: 102,
    width: 102,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 1 },
    borderRadius: 5,
    // shadowOpacity: 0.01,
    // shadowRadius: 1,
    elevation: 20,
  },
  emTypeBtnPress: {
    height: 101,
    width: 101,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
// FA4C4C dark FF9E9E light 9EE8FF blue
