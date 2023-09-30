import { Text, View, StyleSheet, Pressable, Platform, Image } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import * as Location from 'expo-location'
import { useRoute } from '@react-navigation/native'

export default function MapScreen({navigation}) {
      const _goBack = () => {
        navigation.navigate('Home')
      }
      const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);
      const route = useRoute();
      const { type } = route.params;

     

      useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation({latitude: location.coords.latitude,
            longitude: location.coords.longitude, 
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421});
        })();
      }, []);
    
      const setCurrentLocation = (e) => {

      }
      

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.btn}>
              <Pressable onPress={_goBack} style={styles.press}>
                <Ionicons name='md-chevron-back' size={27} color='black' />
              </Pressable>
            </View>
            <View >
              {/* <Pressable style={styles.press}>
                <Ionicons name='md-person' size={27} color='black' />
              </Pressable> */}
            </View>
          </View>
          
        <MapView style={styles.map} region={location}>
            <Marker onDragEnd={(e)=>setCurrentLocation(e)}  coordinate={location} draggable> 
                {type==='general'&&<View style={{backgroundColor: '#FA4C4C',}}>
                  <Image source={require('../assets/emergencyIcon.png')} />
                </View>}
                {type==='medical'&&<Image source={require('../assets/medical.png')} />}
                {type==='fire'&&<Image source={require('../assets/fire.png')} />}
                {type==='crime'&&<Image source={require('../assets/shield.png')} />}
            </Marker>
        </MapView>
        <View style={styles.confBtn}>
            <Pressable>
              <Text style={{color: '#fff', alignSelf: 'center'}}>Confirm</Text>
            </Pressable>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative'
    },
    header: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginTop: 10,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    map: {
      width: '100%',
      height: '93%',
      position: 'relative'
    },
    btn: {
        backgroundColor: '#fffff',
        height: 42,
        width: 42,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 1},
        borderRadius: 5,
        // shadowOpacity: 0.01,
        // shadowRadius: 1,
        elevation: 20,
      },
      press: {height: 41, width: 41, backgroundColor: '#fff', borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confBtn: {
      height: 37,
      width: 100,
      backgroundColor: '#FA4C4C',
      bottom: 10,
      right: 10,
      borderRadius: 25,
      alignContent: 'center',
      justifyContent: 'space-around',
      position: 'absolute'
    }
  });