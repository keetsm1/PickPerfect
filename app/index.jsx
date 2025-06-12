import React from 'react'
import { Image } from 'expo-image';
import { Pressable,Platform, StyleSheet, View,Text, useColorScheme} from 'react-native';
import {Colors} from '@/constants/Colors'
import {useRouter} from 'expo-router';

const index = () => {
  const router = useRouter();
  const colorScheme= useColorScheme();
  const theme= Colors[colorScheme] ?? Colors.light;
  
  return (
    <View style= {[styles.container]}>
      <Text style= {[styles.logo, {color: theme.text}]}>
        PickPerfect
      </Text>

      <Pressable style= {styles.btnStart} 
      onPress={()=> router.push('/draft')}>
          <Text style= {styles.btnText}>Start</Text>
      </Pressable>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    
  },
  logo:{
    paddingTop: 250,
    fontSize: 32,
    fontWeight: 'bold',
   
  },
  btnStart:{
    marginTop:259,
    width: 320,
    height: 60,
    alignItems: 'center',
    backgroundColor: '#e5745c',
    borderRadius: 12,
    justifyContent: 'center',
  },
  btnText:{
    color: 'white',
    fontSize: 20,
  },
})
export default index