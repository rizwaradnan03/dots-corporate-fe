import React from 'react';
import { Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.header}>Selamat Datang</Text>
          <Text style={styles.company}>KSP Sinar Pelita</Text>
          <Text style={styles.menu}>MENU</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F1F1',
      },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 70,
        marginLeft: 20, 
    },
    company: {
        fontSize: 25,
        marginTop: 15,
        marginLeft: 20, 
    },
    menu: {
        fontSize: 15,
        marginTop: 35,
        marginLeft: 20, 
    },
  })

export default HomeScreen;
