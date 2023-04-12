import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color'

const Card = ({ data }: any) => {

    // Check last character is a number or not
    const str = data?.sha;
    const lastChar = str.slice(-1);
    const isNumber = !isNaN(lastChar)
 
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.defText}>Name : <Text style={styles.defText}>{data?.commit?.author?.name}</Text></Text>
            <Text style={styles.defText}>Email : <Text style={styles.defText}>{data?.commit?.author?.email}</Text></Text>
           <View style={[styles.commitIdWrap, isNumber && {backgroundColor:COLOR.isNumber}]}>
            <Text style={styles.commitIdText}>{data?.sha}</Text>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        height: 100,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: COLOR.grey,
        marginBottom: 10
    },
    defText:{
        fontSize:15,
        fontWeight:'500',
        color:COLOR.white,
        marginBottom:3
    },
    commitIdWrap:{
        height:25,
        marginTop:5,
        paddingLeft:5,
        width:'100%',
        justifyContent:'center',
    },
    commitIdText:{
        fontSize:12, 
        fontWeight:'700',
        color:COLOR.white
    }
})