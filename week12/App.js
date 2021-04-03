import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
   const [food, setFood] = useState();

   const [votes, setVotes] = useState(false);

   function increaseTacoVote(value){
     setFood('tacos');
     setVotes('true');
    }

    function increaseBurgerVote(value){
      setFood('burgers');
      setVotes('true');
     }

     function increaseSandwichVote(value){
      setFood('sandwiches');
      setVotes('true');
     }

  return (
      <View style={styles.container}>
        { votes ? (
          <View style={styles.container}>
            <Text>You voted for {food}!</Text>
          </View>
        ) : (
        <View>
          <Text style={styles.headerText}>Vote for your Favorite!</Text>
        <Card>
          <Button title="Taco Bell" onPress={(value) => (increaseTacoVote('tacos'))}/>
        </Card>
        <Card.Divider/>
        <Card>
        <Button title="McDonalds" onPress={(value) => (increaseBurgerVote('burgers'))}/>
        </Card>
        <Card.Divider/>
        <Card>
        <Button title="Subway" onPress={(value) => (increaseSandwichVote('sandwiches'))}/>
        </Card>
        </View>
        )  
      }    
      </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontsize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});