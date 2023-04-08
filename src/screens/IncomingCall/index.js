import { View, Text, StyleSheet, ImageBackground, Pressable,Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesing from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import bg from '../../img/bg.jpg'
const IncomingCall = () => {
  const OnDecline = () => {
    Alert.alert("On Decline")
  }
  const OnAccept = () => {
    console.warn("On Accept")
  }
  return (
    <View style={ styles.root }>
      <ImageBackground
        source={ bg }
        style={ styles.image }
        resizeMode="cover">
        <Text style={ styles.name }>Raj</Text>
        <Text style={ styles.Phnumber }>Incoming Call...</Text>
        <Text style={ styles.Phnumber }>+91 8159882671</Text>

        <View style={ [styles.row, { marginTop: 'auto' }] }>
          <View style={ styles.IconsContainer }>
            <Ionicons name="ios-alarm-sharp" size={ 30 } color="#CAD5E2" />
            <Text style={ styles.IconText }>Remind Me</Text>
          </View>
          <View style={ styles.IconsContainer }>
            <Entypo name="message" size={ 30 } color="#CAD5E2" />
            <Text style={ styles.IconText }>Message</Text>
          </View>
        </View>

        <View style={ styles.row }>
          <Pressable onPress={ OnDecline } style={ styles.IconsContainer }>
            <View style={ styles.accept }>
              <Feather name="x" size={ 30 } color="#CAD5E2" />
            </View>
            <Text style={ styles.IconText }>Decline</Text>
          </Pressable>
          <Pressable onPress={ OnAccept } style={ styles.IconsContainer }>
            <View style={ styles.decline }>
              <AntDesing name="check" size={ 30 } color="#CAD5E2" />
            </View>
            <Text style={ styles.IconText }>Answer</Text>
          </Pressable>
        </View>
      </ImageBackground>




    </View>
  )
}
const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  name: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: '700',
    color: '#758283',
    marginBottom: 16
  },
  Phnumber: {
    fontSize: 20,
    color: '#758283',
  },
  image: {
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    paddingBottom:60
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  IconsContainer: {
    alignItems: 'center',
    padding: 10
  },
  accept: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 50,
    margin: 20
  },
  decline: {
    backgroundColor: '#00D84A',
    padding: 15,
    borderRadius: 50,
    margin: 20
  },
  IconText: {
    fontSize: 15,
    fontWeight: 500
  }
})
export default IncomingCall