import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const CallActionScreen = () => {
    const [iscamaraOn, setIscamaraOn] = useState(true);
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCameraReverse, setIsCamaraReverse] = useState(true);
    const [isHangup, setIsHangup] = useState(false);

    const OnReverseCamera = () => {
        setIsCamaraReverse(currentValue => !isCameraReverse);
    }
    const OnTogglrCamara = () => {
        setIscamaraOn(currentValue => !iscamaraOn);
    }
    const OnToggleMic = () => {
        setIsMicOn(currentValue => !isMicOn);
    }
    const OnHangUp = () => {
        setIsHangup(!isHangup);
    }
    return (
        <View style={ styles.BottomContainer }>
            <Pressable onPress={ OnReverseCamera } style={ styles.iconBtn }>
                <Ionicons name={ isCameraReverse ? "ios-camera-reverse" : "ios-camera" } size={ 23 } color="#CAD5E2" />
            </Pressable>
            <Pressable onPress={ OnTogglrCamara } style={ styles.iconBtn }>
                <MaterialCommunityIcons name={ iscamaraOn ? "camera-off" : "camera" } size={ 23 } color="#CAD5E2" />
            </Pressable>
            <Pressable onPress={ OnToggleMic } style={ styles.iconBtn }>
                <Ionicons name={ isMicOn ? "ios-mic-off" : "ios-mic" } size={ 23 } color="#CAD5E2" />
            </Pressable>
            <Pressable onPress={ OnHangUp } style={ [styles.iconBtn, { backgroundColor: '#E21717' }] }>
                <MaterialCommunityIcons name="phone-hangup" size={ 23 } color="#CAD5E2" />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    BottomContainer: {
        backgroundColor: '#242B2E',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 40,
        marginTop: 'auto'
    },
    iconBtn: {
        backgroundColor: '#758283',
        padding: 15,
        borderRadius: 50
    },
});
export default CallActionScreen