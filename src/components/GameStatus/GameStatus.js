import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GameStatus = ({props})=>{

    return (
        <View >
            {
            props  == 0?
             <Text> </Text> : 
            props == 1 ? 
              <Text style={styles.title}>Congrats, You won!</Text> :
            <Text style={styles.title}>You lost</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
      marginVertical: 340,
      color: "white",
      fontSize: 32,
      fontWeight: "bold",
      letterSpacing: 3,
    },
  
  
  });
  
export default GameStatus;