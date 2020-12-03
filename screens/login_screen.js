import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {styles} from './../styles/styles';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image style={{marginTop: -90}} 
                source={require('./../assets/logo.png')}></Image>

            <Text style={styles.placeholdertext}>No. Telepon</Text>

            <TextInput style={styles.inputbox} placeholder="No. Telepon" ></TextInput>

            <Text style={styles.placeholdertext} >Password</Text>

            <TextInput style={styles.inputbox} placeholder="Password" ></TextInput>

            <TouchableOpacity style={styles.loginbutton}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Login</Text>
            </TouchableOpacity>

            <Text style={{color: 'white', marginTop: 40}} >Belum Memiliki Akun?</Text>
            <Text style={{color: 'white', marginTop: 10, 
                textDecorationLine: 'underline', fontWeight: 'bold'}} >Daftar</Text>
            
            <TouchableOpacity style={styles.instantionbutton}>
                <Text style={{color: 'white', textAlign: 'center', 
                textAlignVertical: 'center', fontWeight: 'bold', fontSize: 13}} >Instansi</Text>
            </TouchableOpacity>

        </View>
    );
}