import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {styles} from './../styles/styles';

export default function ProfileInstansi() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./../assets/building.png')}
          style={{
            width: 100,
            height: 100,
            marginTop: 25,
            marginBottom: 25,
          }}
        />
        </View>
        <ScrollView>
        <View>
        <Text style={styles.h1Text}>Nama Instansi</Text>
        <TextInput style={styles.inputbox2} placeholder="Lalu Muh. Andre Winarta" ></TextInput>

        <Text style={styles.h1Text}>Lokasi Instansi</Text>
        <TextInput style={styles.inputbox2} placeholder="081995177415" ></TextInput>

        <Text style={styles.h1Text}>Identitas Instansi</Text>
        <TextInput style={styles.inputbox2} placeholder="12344121134141" ></TextInput>

        <Text style={styles.h1Text} >Password</Text>
        <View style={{flexDirection:"row", justifyContent:'center'}}>
        <TextInput style={styles.inputbox2} placeholder="****************" >
        </TextInput>
        <Text style={{marginLeft:-30}}>Ubah</Text>
        </View>
        </View>
        </ScrollView>
        </View>
    );
}