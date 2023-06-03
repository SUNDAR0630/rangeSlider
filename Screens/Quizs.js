import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Quizs = () => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
        <Text>Imagine this is a cooler questions </Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity>
            <Text>Cool option 1</Text>
            </TouchableOpacity>
           <TouchableOpacity>
             <Text>Cool option 1</Text>
           </TouchableOpacity>
           <TouchableOpacity>
            <Text>Cool option 1</Text>
            </TouchableOpacity>
           <TouchableOpacity>
            <Text>Cool option 1</Text>
            </TouchableOpacity>

            <View style={styles.bottom}>
                <TouchableOpacity>
                    <Text>SKIP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>NEXT</Text>
                </TouchableOpacity>
            </View>
        </View>
 
    </View>
  )
}

export default Quizs

const styles = StyleSheet.create({
    container:{
        padding: 12,
        height: '100%',
        
    },

    top: {
        marginVertical: 16,
    },

    options: {
        marginVertical:16,
        flex:1,
    },
    bottom:{
        marginBottom:12,
        paddingVertical:16,
        justifyContent:"space-between",
        flexDirection:"row",
    
    }
})