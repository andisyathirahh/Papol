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

export default function Riwayat() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image style={{marginBottom: -60}}
                source={require('./../assets/logo.png')}></Image>
        <Text style={styles.h1Text2}>Riwayat Panggilan</Text>
           
            <Text  style={styles.h1Text2}>Arsike Cipta Pelangi</Text>
            <View>
            <View style={{flexDirection:"row", justifyContent:'center'}}>
            <Text style={{color:'white'}}>12 November</Text> 
            <Text style={{marginLeft:160,color:'white'}}>21.31</Text>
            
            <Image style={{marginLeft:30}}
                source={require('./../assets/detail.png')}></Image>
                </View>
        </View>
        
      
      
        
     
        <TouchableOpacity style={styles.loginbutton}
            onPress={() => navigation.navigate('Home')}>
                <Text style={{color: 'white', textAlign: 'center', textAlignVertical: 'center', fontWeight: 'bold'}} >Kembali Ke Menu</Text>
            </TouchableOpacity>
         </View>

    );
}