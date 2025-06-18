import { Colors } from '@/constants/Colors';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function TabsLayout(){
    const colorScheme= useColorScheme();
    const theme= Colors[colorScheme] ?? Colors.light;
    return <Tabs screenOptions= {{headerShown: false}}>

        <Tabs.Screen name= "otherTeams" 
        options = {{
            title: "Teams",
            tabBarLabelStyle: {color: theme.text },
            tabBarIcon: ()=> <FontAwesome name= "users" size ={24} color= {"#e5745c"}/>
        }}
        />
        <Tabs.Screen name= "draft" 
        options = {{
            title: "Draft",
            tabBarLabelStyle: {color: theme.text },
            tabBarIcon: ()=> <FontAwesome name= "edit" size ={24} color= {"#e5745c"}/>
        }}
        />

        <Tabs.Screen name= "myteam" 
        options = {{
            title: "My Team",
            tabBarLabelStyle: {color: theme.text },
            tabBarIcon: ()=> <FontAwesome name= "user-circle" size ={24} color= {"#e5745c"}/>
        }}
        />
    </Tabs>
}