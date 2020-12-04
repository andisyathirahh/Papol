import * as React from 'react';
import {
    View, 
    Text, 
    TextInput, 
    Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {styles} from './../styles/styles';

export default function LoginInstansiScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={{marginTop: 70, marginBottom: -50}}
                source={require('./../assets/logo.png')}></Image>

            <Text style={styles.placeholdertext}>Identitas Instansi</Text>

            <TextInput style={styles.inputbox} placeholder="Identitas Instansi" ></TextInput>

            <Text style={styles.placeholdertext} >Password</Text>

            <TextInput style={styles.inputbox} placeholder="Password" ></TextInput>

            <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('Profile')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Masuk</Text>
            </TouchableOpacity>

        </View>
    );
}