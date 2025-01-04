import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function PaymentScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
  const handlePaymentMethodPress = (method) => {
    console.log(`Selected Payment Method: ${method}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', 
          }}
          style={styles.profileImage}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.userName}>Hello, User</Text>
          <Text style={styles.date}>Tue, Jul 19</Text>
        </View>
        <TouchableOpacity>
          <Icon name="more-vert" size={24} color= "#909090"/>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://5.imimg.com/data5/ZG/OZ/NC/SELLER-41864750/turkey-eggs-500x500.jpg',
          }}
          style={styles.productImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Shipping Address</Text>
          <Text style={styles.cardText}>
            Address Line 1 Line 1{'\n'}
            Line 2 Line 2{'\n'}
            City{'\n'}
            Pincode
          </Text>
          <Text style={styles.arrivalText}>Arrival by 18th December, Tuesday</Text>
        </View>
        <TouchableOpacity style={styles.editIcon}>
          <Icon name="edit" size={20} color="#909090" />
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.applyCoupons}>
        <Text style={styles.applyCouponsText}>Apply Coupons</Text>
        <Icon name="keyboard-arrow-right" size={30} color="#909090" />
      </TouchableOpacity>


      <Text style={styles.paymentTitle}>Payment Methods</Text>
      <View style={styles.paymentMethods}>
        <TouchableOpacity
          style={styles.paymentMethod}
          onPress={() => handlePaymentMethodPress('Card')}>
          <Icon name="credit-card" size={30} color="#000" />
          <Text style={styles.paymentText}>Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethod}
          onPress={() => handlePaymentMethodPress('UPI')}>
          <Image
            source={{
              uri: 'https://cdn.iconscout.com/icon/free/png-256/free-upi-logo-icon-download-in-svg-png-gif-file-formats--unified-payments-interface-payment-money-transfer-logos-icons-1747946.png', 
            }}
            style={styles.paymentImage}
          />
          <Text style={styles.paymentText}>UPI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.paymentMethod}
          onPress={() => handlePaymentMethodPress('Net Banking')}>
          <Icon name="account-balance" size={30} color="#000" />
          <Text style={styles.paymentText}>Net Banking</Text>
        </TouchableOpacity>
      </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerTab}>
          <Icon name="home" size={30} color="#000" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTab}>
          <Icon name="shopping-bag" size={30} color="#000" />
          <Text style={styles.footerText}>My Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTab}>
          <Icon name="store" size={30} color="#4CAF50" />
          <Text style={[styles.footerText, { color: '#4CAF50' }]}>Market</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerTab}>
          <Icon name="person" size={24} color="#000" />
          <Text style={styles.footerText}>My Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  headerInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontFamily:'outfit-bold'
  },
  date: {
    color: Colors.PRIMARY,
    fontSize: 17,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 16, 
    paddingVertical: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 16,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardText: {
    color: '#909090',
    fontSize: 15,
    marginBottom: 4,
  },
  arrivalText: {
    color: '#4CAF50',
    fontSize: 13,
  },
  editIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  applyCoupons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },
  applyCouponsText: {
    fontFamily: 'outfit-medium',
    fontSize:16
  },
  paymentTitle: {
    fontFamily: 'outfit-medium',
    fontSize:15,
    margin: 16,
    marginBottom: 8,
  },
  paymentMethods: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  paymentMethod: {
    alignItems: 'center',
  },
  paymentImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  paymentText: {
    fontSize: 15,
    color: '#000',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#F0F0F0',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
  },
  footerTab: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#000',
    marginTop: 4,
  },
});
