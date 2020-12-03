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
        marginTop: 17,
        width: 300,
        height: 45,
        borderRadius: 10,
        paddingHorizontal: 20
    },
    placeholdertext: {
        color: 'white',
        justifyContent: 'flex-start',
        marginLeft: -225,
        marginTop: 35,
        fontWeight: 'bold'
    },
    loginbutton: {
        marginTop: 40,
        borderColor: 'white',
        borderWidth: 1.5,
        height: 38,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    instantionbutton: {
        marginTop: 90,
        borderColor: 'white',
        borderWidth: 1,
        height: 37,
        width: 190,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
})
