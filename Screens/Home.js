import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Tittle from '../Components/Tittle'

const Home = () => {
  return (
    <View>
      <Tittle/>
      <View style={styles.bannerContainer}>
          <Image source={{
            uri:"https://cdn.pixabay.com/photo/2021/02/13/08/12/question-mark-6010647_640.jpg"}}
          style={styles.banner}
          resizeMode="contain"
          />
      </View>
      <TouchableOpacity>
        <Text>
            Start
        </Text>
      </TouchableOpacity>
     
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    banner:{
        height:200,
        width:300
    },
    bannerContainer:{
      justifyContent:"center",
      textAlign:"center"    
    },
    
})