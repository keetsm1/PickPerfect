import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';

const index = () => {
  const router = useRouter();
  const colorScheme= useColorScheme();
  const theme= Colors[colorScheme] ?? Colors.light;
  
  return (

    <SafeAreaView style= {{flex: 1}}>
       <View style= {[styles.container, {backgroundColor: theme.background}]}>
      <Text style= {[styles.logo, {color: theme.text}]}> PickPerfect </Text>

      <Pressable style= {styles.btnStart} 
      onPress={()=> router.push('otherTeams')}>
          <Text style= {styles.btnText}>Start</Text>
      </Pressable>
    </View>
    </SafeAreaView>
   
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