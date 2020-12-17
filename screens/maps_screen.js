import MapView, {Marker} from 'react-native-maps';
import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
    Button,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {styles} from './../styles/styles';

export default function MapsScreen () {
    const navigation = useNavigation();
    return(
        <>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03,
            }}
        >
            <Marker
            coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
                }}
            image={require('./../assets/marker.png')}
            title="Marker"
            description="Ini adalah marker"></Marker>
      </MapView>
      <View
      style={{
          position: "absolute",
          bottom: "3%",
          width: "50%",
          alignSelf: "center",
          }}>
      <TouchableOpacity
          style={styles.buttoninmap}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Back</Text>
      </TouchableOpacity>
      </View>
      </>
    );
}