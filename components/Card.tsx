import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Card({data = null, navigation}) {

   console.log(data)
   

   function handleClick(){
    navigation.navigate("Details", {url: data?.url})
    }

  return (

    <TouchableOpacity style = {styles.container} onPress={handleClick}>
        
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: 50,
    width: 50,
    margin: 5,
  },

});
