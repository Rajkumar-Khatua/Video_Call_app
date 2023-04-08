import { StyleSheet, Text, View } from 'react-native'
import CallActionScreen from '../../components/CallActionScreen'
const CallScreen = () => {
    return (
        <View View style={ styles.page }>
            <View style={ styles.CameraPreview }>

            </View>
            <CallActionScreen />
        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#0D0D0D',
    },
    CameraPreview: {
        height: 150,
        width: 120,
        backgroundColor: '#CAD5E2',
        position: 'absolute',
        left: 15,
        top: 100,
        borderRadius: 10
    },
    // name: {
    //     marginTop: 50,
    //     fontSize: 30,
    //     fontWeight: '700',
    //     color: '#CAD5E2',
    //     marginBottom: 16
    // },
    // Phnumber: {
    //     fontSize: 20,

    // },
})
export default CallScreen