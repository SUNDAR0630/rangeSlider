import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View>
      <View>
      <Text>Result</Text>
      </View>
       
      <View style={styles.bannerContainer}>
          <Image source={{
            uri:"https://cdn.pixabay.com/photo/2021/02/13/08/12/question-mark-6010647_640.jpg"}}
          style={styles.banner}
          resizeMode="contain"
          />
      </View>
    
    
   <View>
    
     
   </View>

    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner:{
    height:300,
    width:300
},
bannerContainer:{
  justifyContent:"center",
  textAlign:"center"    
},


})