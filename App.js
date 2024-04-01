import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
  });
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{
            paddingHorizontal: 20
      }}>
        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 40, lineHeight: 46 }}>Everything -</Text>
        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 40, lineHeight: 46 }}>at one place</Text>
        <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 18, color: 'gray', marginTop: 20 }}>We're excited to introduce Currecy Converter for
          various countries.</Text>
      </View>
      <Image source={require('./assets/images/map.png')} style={{ width: 'auto', height: 200, marginTop: 0, resizeMode: "contain" }} />

      <View style={
        {
          width: '100%',
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
          paddingBottom : 20,
          borderColor : "gray",
          borderBottomWidth : 0.3,
          marginTop : 20
        }
      }>
        <View style={{flexDirection: "row", alignItems: "center", gap : 20}}>
          <View style={{backgroundColor : "orange", flexDirection: "row", alignItems: "center", gap : 30, borderRadius : 20, paddingHorizontal : 20}}>
            <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 20, lineHeight: 40 }}>01</Text>
          </View>
          <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 24, lineHeight: 46 }}>Bin Checker</Text>
        </View>
        <View><Text style={{ fontSize: 30 }}>↗️</Text></View>
      </View>

      <View style={
        {
          width: '100%',
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          paddingBottom : 20,
          borderColor : "gray",
          borderBottomWidth : 0.3
        }
      }>
        <View style={{flexDirection: "row", alignItems: "center", gap : 20}}>
          <View style={{backgroundColor : "black", flexDirection: "row", alignItems: "center", gap : 30, borderRadius : 20, paddingHorizontal : 20}}>
            <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 20, lineHeight: 40, color : "white" }}>02</Text>
          </View>
          <Text style={{ fontFamily: 'Nunito-SemiBold', fontSize: 24, lineHeight: 46 }}>Currecy Converter</Text>
        </View>
        <View><Text style={{ fontSize: 30 }}>↗️</Text></View>
      </View>

      <View style={
        {
          position : "absolute",
          bottom : 0,
          backgroundColor : "#f3f3f3",
          height : 200,
          width : "100%",
          paddingHorizontal : 20,
          paddingBottom : 20
        }
      }>
        <View style={{flexDirection: "row", alignItems: "center", gap : 20, paddingVertical : 10}}>
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 28, lineHeight: 46 }}>👑</Text> 
          <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 28, lineHeight: 46 }}>Premium</Text>
        </View>
        <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 18, lineHeight: 20, color : "gray" }}>Unlock all of our features to be in control of your experience.</Text>
        <TouchableOpacity  onPress={() => console.log('Pressed')} color={"black"} style={{
          backgroundColor : "gray",
          borderRadius : 20,
          width : "40%",
          color : "white",
          marginTop : 20
        }}>
            <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 16, color : "white", paddingVertical : 10, paddingHorizontal : 20, width : "100%" }}>Get Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,

  },
});
