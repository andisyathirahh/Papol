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

            <Text style={styles.placeholdertext}>NIK</Text>

            <TextInput style={styles.inputbox} placeholder="Contoh : 77403828...." ></TextInput>

            <Text style={styles.placeholdertext} >Nama Lengkap</Text>

            <TextInput style={styles.inputbox} placeholder="Contoh : Raditya Dika" ></TextInput>

            <Text style={styles.placeholdertext}>No. Telepon</Text>

            <TextInput style={styles.inputbox} placeholder="Contoh : 085432109876" ></TextInput>

            <Text style={styles.placeholdertext}>Password</Text>

            <TextInput style={styles.inputbox} placeholder="Masukkan Password Min 6 char" ></TextInput>

            <Text style={styles.placeholdertext}>Konfirmasi Password</Text>

            <TextInput style={styles.inputbox} placeholder="Konfirmasi Password" ></TextInput>

            <TouchableOpacity style={styles.loginbutton}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Register</Text>
            </TouchableOpacity>

            <Text style={{color: 'white', marginTop: 40}} >Sudah Memiliki Akun?</Text>
            <Text style={{color: 'white', marginTop: 10, 
                textDecorationLine: 'underline', fontWeight: 'bold'}} >Masuk</Text>
            

        </View>
    );
}