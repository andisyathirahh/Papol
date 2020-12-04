import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#173248'
    },
    inputbox: {
        backgroundColor: 'white',
        marginHorizontal: 60,
        marginTop: 5,
        width: 300,
        height: 35,
        borderRadius: 10,
        paddingHorizontal: 20
    },
    inputbox2: {
        backgroundColor: '#173248',
        marginHorizontal: 60,
        marginTop: 15,
        width: 300,
        height: 40,
        borderRadius: 10,
        borderColor:'white',
        marginLeft:30,
        paddingRight:20,

        paddingHorizontal: 20,
        borderWidth: 1,
        
    },
    placeholdertext: {
        color: 'white',
        marginLeft: -225,
        marginTop: 35,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    konfirmtext: {
        color: 'white',
        marginLeft: -155,
        marginTop: 35,
        fontWeight: 'bold'
    },
    namatext: {
        color: 'white',
        marginLeft: -210,
        marginTop: 35,
        fontWeight: 'bold'
    },
    loginbutton: {
        marginTop: 30,
        borderColor: 'white',
        borderWidth: 1.5,
        height: 38,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    instantionbutton: {
        marginTop: 60,
        borderColor: 'white',
        borderWidth: 1,
        height: 35,
        width: 190,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    h1Text: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 30,
        fontFamily: 'Times New Rowman',
        fontSize: 16,
        marginTop: 15
    },
    h1Text2: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:'left',
        marginLeft: -180,
        fontFamily: 'Times New Rowman',
        fontSize: 16,
        marginBottom:20,
    },


    subtext: {
        color: 'white',
        marginLeft: 30,
        marginTop: 20,
        fontSize: 14,
    },
    subtext2: {
        color: 'white',
    marginRight: 150,
        marginTop: 20,
        fontSize: 14,
        textAlign:'right',
    },
})
