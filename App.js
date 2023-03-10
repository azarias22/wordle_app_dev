import { StatusBar } from 'expo-status-bar';
import { TextInput, Text, View, SafeAreaView,Pressable} from 'react-native';
import { useEffect, useState } from 'react';
import GameStatus from './src/components/GameStatus'
import {duplicateBoard,styles} from './src/utils'

const wordList = require('./wordlist.json');
const correctWord = wordList[Math.floor(Math.random() * wordList.length)].split('');

export default function App() {

  // gameStatus is 1 when the game is won and 2 when the game is lost
  const [gameStatus, setGameStatus] = useState(0)
  const [board,setBoard] = useState(new Array(6).fill(new Array(5).fill("")));

  const [rowOn, setRowOn] = useState(0)
  const [columnOn, setColumnOn] = useState(0)

  // Helper functions 
  
  function checkEnter() {
    if (columnOn > 4) {
    setRowOn(rowOn+1)
    setColumnOn(0)
    }
    return;
  }


  function choseColor(char,row,col) {
    if (row >= rowOn){
      return "black"
    }
    if (char == correctWord[col]){
      return "green"
    }
    else if (correctWord.includes(char)){
      return "#B9B304" 
    }
    else{
      return "#7D8480"
    }
  }

  function playAgain (){
    setBoard(new Array(6).fill(new Array(5).fill("")));
    setGameStatus(0)
    setRowOn(0)
    setColumnOn(0)
    return;
  }

  useEffect(()=>{
    if (rowOn>0){
      if (board[rowOn-1 ].toString() === correctWord.toString()){
        setGameStatus(1)
      }else if (rowOn > 5){
        setGameStatus(2)
      }
    }
  },[rowOn])

  const onKeyPressed = (event) => {
    const keypressed = event.nativeEvent.key

    if (gameStatus == 0 ) {
      const updatedBoard = duplicateBoard(board);

      if (keypressed == "Backspace"){
        if ((columnOn - 1) >= 0) {
        updatedBoard[rowOn][ columnOn - 1 ] = "";
        setBoard(updatedBoard);
        setColumnOn( columnOn - 1 );
        }
        return;
      } 

      if (columnOn < 5 && rowOn < 6) {
        updatedBoard[rowOn][columnOn] = keypressed;
        setBoard(updatedBoard);
        setColumnOn(columnOn + 1);
        return;
      }
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="inverted" />
      <Text style={styles.title}>WORDLE</Text>
      <View style={styles.board}>
        {board.map((guess,i) =>
          <View key={`row_${i}`} style={styles.guess}>
          {guess.map((char,j) => (
            <View key={`char_${i}_${j}`} 
              style={[styles.cell, { backgroundColor: choseColor(char,i,j)} ]}>
              <Text style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 28,}}
               >{char.toUpperCase()}</Text>
            </View>
          ))
          }
        </View>)}
      </View>
      <GameStatus props={gameStatus}/>
      {gameStatus != 0 && <Pressable style={styles.button} title="Play Again" onPress={playAgain}>
        <Text style={{fontSize: 24 , fontWeight: "bold"}}> Play Again</Text>
      </Pressable>
      }
      <TextInput
                value={"Type Here"}
                style={styles.input}
                onKeyPress={onKeyPressed}
                keyboardType={"email-address"}
                onSubmitEditing={() => checkEnter()}
        />
    </SafeAreaView>
  );
};