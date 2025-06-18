import { Colors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";
import { Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';

const otherTeams = () => {
  const colorScheme= useColorScheme();
  const theme= Colors[colorScheme] ?? Colors.light;
  const [isModalVisibile, setIsModalVisible]= useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style= {[styles.plusBtn, {backgroundColor: theme.background}]}>
      <Pressable onPress={()=> setIsModalVisible(true)}>
        <FontAwesome name= "plus-circle" 
            size= {45}
            color= {"#e5745c"}
        />
      </Pressable>
      </View>

      <Modal  visible= {isModalVisibile} transparent= {true} animationType='fade'>

        <View style= {styles.modalOverlay}>
          <View style= {[styles.popUp, {backgroundColor: theme.background}]}>
            <View style = {styles.inputGroup}>
              <TextInput style = {styles.myTeamInputs} placeholder= "Enter team name"></TextInput>
              <TextInput style = {styles.otherTeamsInput} placeholder= "Enter other team name"></TextInput>
            </View>
            
          <View style = {styles.buttonRow}>
             <Pressable style = {styles.otherTeamBtn}     onPress= {()=> addAnotherTextBox}>
              <Text style ={[styles.otherTeamBtnText, {color: theme.btnTextColor}]}>Add Team</Text>
             </Pressable>

              <Pressable style = {styles.closeBtn} onPress= {()=> setIsModalVisible(false)}>
               <Text style ={[styles.closeBtnText, {color: theme.btnTextColor}]}>Close</Text>
              </Pressable>
          </View>

          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}
export default otherTeams


function addAnotherTextBox(){
  return <TextInput style = {styles.otherTeamsInput} placeholder= "Enter other team name"></TextInput>
}

const styles = StyleSheet.create({
  plusBtn:{
      backgroundColor: '#fff',
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingBottom: 20,
      paddingRight: 30,
  },
  modalOverlay:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popUp:{
    flex: 0,
    width: 300,   
    height: 500,                 
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  myTeamInputs:{
    padding:10,
    width: 250,   
    height: 40,
    margin:12,
    borderRadius: 10,
    borderWidth: 1, 
    length: 5,
  },
  otherTeamsInput:{
    padding:10,
    width: 250,   
    height: 40,
    margin:12,
    borderRadius: 10,
    borderWidth: 1, 
    length: 5,
  },
  closeBtn:{
    backgroundColor:'#e5745c',
    width:120,
    borderRadius: 5,
     alignItems: 'center',
    justifyContent: 'center',
  },
  closeBtnText:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherTeamBtn:{
    backgroundColor:'#e5745c',
    width: 120,
    borderRadius: 5,
     alignItems: 'center',
    justifyContent: 'center',
  },
  otherTeamBtnText:{
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  inputGroup:{
    width: '100%',
  }
})