import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

// Import images
import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uriDiceImageOne, setUriDiceImageOne] = useState(DiceOne);
  const [uriDiceImageTwo, setUriDiceImageTwo] = useState(DiceTwo);

  const handlePlayButton = () => {
    let randomNumberOne = Math.floor(Math.random() * 6) + 1;
    let randomNumberTwo = Math.floor(Math.random() * 6) + 1;

    switch (randomNumberOne) {
      case 1:
        setUriDiceImageOne(DiceOne);
        break;
      case 2:
        setUriDiceImageOne(DiceTwo);
        break;
      case 3:
        setUriDiceImageOne(DiceThree);
        break;
      case 4:
        setUriDiceImageOne(DiceFour);
        break;
      case 5:
        setUriDiceImageOne(DiceFive);
        break;
      case 6:
        setUriDiceImageOne(DiceSix);
        break;
      default:
        setUriDiceImageOne(DiceOne);
        break;
    }

    switch (randomNumberTwo) {
      case 1:
        setUriDiceImageTwo(DiceOne);
        break;
      case 2:
        setUriDiceImageTwo(DiceTwo);
        break;
      case 3:
        setUriDiceImageTwo(DiceThree);
        break;
      case 4:
        setUriDiceImageTwo(DiceFour);
        break;
      case 5:
        setUriDiceImageTwo(DiceFive);
        break;
      case 6:
        setUriDiceImageTwo(DiceSix);
        break;
      default:
        setUriDiceImageTwo(DiceTwo);
        break;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.diceContainer}>
          <Image style={styles.image} source={uriDiceImageOne} />
          <Image style={styles.image} source={uriDiceImageTwo} />
        </View>
        <TouchableOpacity onPress={handlePlayButton}>
          <Text style={styles.gamePlayButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center', // horizontal axis as flex is set to column
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#f2a365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475e',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
  diceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
