import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CallActionScreen from '../../components/CallActionScreen';
import { useNavigation, useRoute } from '@react-navigation/core';


const CallingScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    // person calling
    const user= route?.params?.user;

    const goBack= ()=>{
        navigation.pop();
    }
    return (
        <View style={styles.page }>
            <Pressable onPress={goBack} style={styles.backBtn}>
            <Ionicons name="ios-arrow-back" size={25} color={'white'}/>
            </Pressable>

            <View style={ styles.CameraPreview }>
                <Text style={ styles.name }>{user.user_display_name}</Text>
                <Text style={ styles.Phnumber }>Ringing +91 8159882671</Text>
            </View>
            <CallActionScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#120E43',
        height: "100%",
        flex:1
    },
    CameraPreview: {
        backgroundColor: '#120E43',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    name: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: '700',
        color: '#CAD5E2',
        marginBottom: 16
    },
    Phnumber: {
        fontSize: 20,

    },
    BottomContainer: {
        backgroundColor: '#242B2E',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 40,
    },
    iconBtn: {
        backgroundColor: '#758283',
        padding: 15,
        borderRadius: 50
    },
    backBtn:{
       top:6,
       left:10,

    }
});
export default CallingScreen