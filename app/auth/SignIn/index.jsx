import { Colors } from '@/constants/Colors';
import { useNavigation, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const navigation = useNavigation();
  const inputRefs = [];

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs[index + 1]?.focus();
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
    const router = useRouter();
    const handleNext = () => {
      const enteredOtp = otp.join(""); // Combine OTP array into a single string
      if (enteredOtp.length < 6 || otp.includes("")) {
        Alert.alert("Incomplete OTP", "Please enter the complete OTP to proceed.");
      } else {
        router.push('/Config/Payment');
      }
    };
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>💬</Text>
      </View>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleOtpChange(text, index)}
            ref={(ref) => (inputRefs[index] = ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button}
        onPress = {handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  iconWrapper: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 40,
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.GREEN,
    color: Colors.WHITE,
  },
  title: {
    fontSize: 26,
    fontFamily: 'outfit',
    color: Colors.PRIMARY,
    marginBottom: 50,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  otpInput: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.GRAY,
    textAlign: 'center',
    fontSize: 20,
    width: 40,
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: Colors.GREEN,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginBottom: 30
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 20,
    fontFamily:'outfit'
  },
});