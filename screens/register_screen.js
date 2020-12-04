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

export default function RegisterScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={{marginTop: -30, marginBottom: -30}} 
                source={require('./../assets/logo.png')}></Image>
            <ScrollView>
                <View style={{alignItems: "center", justifyContent: "center"}}>
            <Text style={styles.placeholdertext}>Nomor Induk</Text>
            <TextInput style={styles.inputbox} placeholder="Contoh : 77403828...." ></TextInput>

            <Text style={styles.placeholdertext}>Nama Lengkap</Text>
            <TextInput style={styles.inputbox} placeholder="Contoh : Raditya Dika" ></TextInput>

            <Text style={styles.placeholdertext}>No. Telepon</Text>
            <TextInput style={styles.inputbox} placeholder="Contoh : 085432109876" ></TextInput>

            <Text style={styles.placeholdertext}>Password</Text>
            <TextInput style={styles.inputbox} placeholder="Masukkan Password Min 6 char" ></TextInput>

            <Text style={styles.placeholdertext}>Konfirmasi Password</Text>
            <TextInput style={styles.inputbox} placeholder="Konfirmasi Password" ></TextInput>

            <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('Login')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Register</Text>
            </TouchableOpacity>

            <Text style={{color: 'white', marginTop: 20}} >Sudah Memiliki Akun?</Text>
            <Text style={{color: 'white', marginTop: 10, 
                textDecorationLine: 'underline', fontWeight: 'bold'}} >Masuk</Text>
                </View>
            </ScrollView>

        </View>
    );
}