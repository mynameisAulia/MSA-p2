import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { firebase } from '../config'
import EntypoIcon from "react-native-vector-icons/Entypo";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import CardHome from '../CardHome';

const Profile  = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('')

    useEffect (() => {
      firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if(snapshot.exists){
          setName(snapshot.data())
        }
        else {
          console.log('User does not exist')
        }
      })
    }, [])

    return (
      <SafeAreaView style={styles.container}>
        <Text style={{fontSize:20, fontWeight:'bold', marginLeft:180, marginBottom:-11}}>
          {name.username}
        </Text>
        
        <TouchableOpacity 
          onPress={() => {firebase.auth().signOut()}}
          style={styles.button5}>
        <EntypoIcon name="user" style={styles.icon5}></EntypoIcon>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => navigation.navigate('CardHome')}
          style={styles.button3}>
        <View style={styles.icon3Row}>
          <EntypoIcon name="open-book" style={styles.icon3}></EntypoIcon>
          <Text style={styles.card}>CARD</Text>
        </View>
      </TouchableOpacity>

      </SafeAreaView>
      
    )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },

  button1: {
    width: 284,
    height: 108,
    backgroundColor: "rgba(168,230,207,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 50,
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 55,
    width: 50
  },
  game: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 15
  },
  iconRow: {
    height: 55,
    flexDirection: "row",
    flex: 1,
    marginRight: 108,
    marginLeft: 27,
    marginTop: 26
  },
  button2: {
    width: 284,
    height: 108,
    backgroundColor: "rgba(220,237,193,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 14,
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 55,
    width: 50
  },
  video: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 15
  },
  icon2Row: {
    height: 55,
    flexDirection: "row",
    flex: 1,
    marginRight: 107,
    marginLeft: 27,
    marginTop: 27
  },
  button3: {
    width: 284,
    height: 108,
    backgroundColor: "rgba(255,211,182,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 14,
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 55,
    width: 50
  },
  card: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 15
  },
  icon3Row: {
    height: 55,
    flexDirection: "row",
    flex: 1,
    marginRight: 110,
    marginLeft: 27,
    marginTop: 26
  },
  button4: {
    width: 284,
    height: 108,
    backgroundColor: "rgba(255,170,165,1)",
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 14,
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 50,
    height: 55,
    width: 50
  },
  quiz: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 15
  },
  icon4Row: {
    height: 55,
    flexDirection: "row",
    flex: 1,
    marginRight: 119,
    marginLeft: 27,
    marginTop: 27
  },
  button5: {
    width: 57,
    height: 63,
    backgroundColor: "#E6E6E6",
    borderRadius: 100,
    marginTop: -20,
    marginLeft: 301
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 25,
    height: 27,
    width: 25,
    marginTop: 18,
    marginLeft: 16
  }
})
