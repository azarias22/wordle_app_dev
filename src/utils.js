import { StyleSheet} from 'react-native';

export const duplicateBoard = (board) => {
    return [...board.map((eachRow) => [...eachRow])];
};

export const styles = StyleSheet.create({
    input: {
      color: "white",
      borderColor: "black",
      fontSize: 24,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginVertical: 340,
      
    },
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: 'center',
    },
    title:{
      marginTop: 3,
      color: "white",
      fontWeight: "bold",
      fontSize: 32,
      letterSpacing: 4,
    },
    guess: {
      flexDirection: "row",
      alignSelf: "stretch",
    },
    cell: {
      margin: 2,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      borderColor: "#7D8480",
      aspectRatio: 6/5,
      borderWidth: 3,
    },
    board: {
        alignSelf: "stretch",
        marginVertical: 10,
        height: 100,
      },
    button: {
        position: "absolute",
        bottom: 180,
        padding: 8,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        marginVertical: 10,
      },
});
  