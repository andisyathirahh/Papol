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

export default function ProfileScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./../assets/user.png')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            marginTop: 25,
          }}
        />
        </View>
        <Text style={styles.namatext}>Nama Lengkap</Text>
        <TextInput style={styles.inputbox} placeholder="Contoh : Raditya Dika" ></TextInput>

        <Text style={styles.placeholdertext}>No. Telepon</Text>
        <TextInput style={styles.inputbox} placeholder="No. Telepon" ></TextInput>

        <Text style={styles.namatext}>Nomor Induk</Text>
        <TextInput style={styles.inputbox} placeholder="Contoh : 77403828...." ></TextInput>

        <Text style={styles.placeholdertext} >Password</Text>
        <TextInput style={styles.inputbox} placeholder="Password" ></TextInput>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}