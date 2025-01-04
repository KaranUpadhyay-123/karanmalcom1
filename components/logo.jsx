import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function AgriSmart() {

    const router = useRouter();
  return (
    <View>
      <View style= {styles.container}>
        <Text style = {{
            fontSize: 25,
            fontFamily:'outfit',
            alignContent:'center',
            textAlign:'center'
        }}>Welcome to AgriSmart</Text>
      </View>
      <Image source = {require("./../assets/images/image1.png")}
        style={{
          width: '100%',
          heigth: 500,
          padding: 50,
          marginTop: '25%'
        }}
      />
      <TouchableOpacity style = {styles.button}
        onPress = {()=> router.push('/auth/SignIn')}
      >
        <Text style={{ color: Colors.WHITE,
          textAlign:'center',
          fontFamily:'outfit',
          fontSize: 20,
        }}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor: Colors.WHITE,
      marginTop: 0,
      borderTopLeftRadius:0,
      borderTopRightRadius:0,
      padding:15,
    },
    button:{
      padding: 15,
      backgroundColor: Colors.GREEN,
      borderRadius: 90,
      marginTop:'37%'
    }

})
