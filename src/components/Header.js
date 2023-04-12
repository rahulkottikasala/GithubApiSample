import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitHub Log</Text>
      <Text style={styles.userInfo}>user</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        width:'100%', 
        height:70,
        paddingHorizontal:20,
        flexDirection:'row', 
        alignItems:"center",
        justifyContent:'space-between',
        borderBottomColor:COLOR.lightGrey,
        borderBottomWidth:.5
    },
    title:{
        fontSize:22, 
        fontWeight:'800',
        color:COLOR.white
    },
    userInfo:{
        fontSize:17, 
        fontWeight:'700',
        color:COLOR.white,
    }
})